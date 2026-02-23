import { useState, useEffect } from 'react';

export function useContentData() {
    const [data, setData] = useState({
        siteConfig: null,
        projects: null,
        connections: null,
        automations: null,
        techStack: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        async function fetchAll() {
            try {
                const [siteRes, projRes, connRes, autoRes, techRes] = await Promise.all([
                    fetch('/content/siteConfig.json'),
                    fetch('/content/projects.json'),
                    fetch('/content/connections.json'),
                    fetch('/content/automations.json'),
                    fetch('/content/techStack.json'),
                ]);

                const siteConfig = await siteRes.json();
                const projects = await projRes.json();
                const connections = await connRes.json();
                const automations = await autoRes.json();
                const techStack = await techRes.json();

                setData({
                    siteConfig,
                    projects,
                    connections,
                    automations,
                    techStack,
                    loading: false,
                    error: null,
                });
            } catch (err) {
                setData(prev => ({ ...prev, loading: false, error: err.message }));
            }
        }

        fetchAll();
    }, []);

    return data;
}
