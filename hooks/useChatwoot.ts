import { useState, useEffect } from "react";
import useSWR from "swr";
import { ChatwootPayload } from "../types";
import { camelizeKeys } from "humps";

const useChatwoot = (): [boolean, ChatwootPayload, Error | undefined] => {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState<Error | undefined>();
    const [payload, setPayload] = useState<ChatwootPayload>({});

    if (process.env.NODE_ENV === "development") {
        const { data, error } = useSWR("/mocks/chatwoot.json", (url) => fetch(url).then(r => r.json()));

        if (error) {
            setError(Error("Unable to fecth development data"));
        } else {
            useEffect(() => {
                if (data) {
                    setPayload(camelizeKeys(data));
                    setLoaded(true);
                }
            }, [data]);
        }
    }

    const messageEvent = (e: MessageEvent) => {
        try {
            const { data } = JSON.parse(e.data);

            setPayload(camelizeKeys(JSON.parse(data)));
        } catch {
            setError(Error("Unable to parse data"));
        } finally {
            setLoaded(true);
        }

        console.log("message event: ", payload);
    };

    useEffect(() => {
        if (process.env.NODE_ENV !== "development") {
            window.addEventListener("message", messageEvent, true);
            window.parent.postMessage("chatwoot-dashboard-app:fetch-info", "*");
        }

        // cleanup this component
        return () => {
            if (process.env.NODE_ENV !== "development") {
                window.removeEventListener("message", messageEvent);
            }
        };
    }, []);

    return [loaded, payload, error];
};

export default useChatwoot;