import React, { createContext, useState } from "react";

export const RepoContext = createContext();

export function RepoProvider(props) {
    const [repos, setRepo] = useState([]);

    return (
        <RepoContext.Provider value={{ repos, setRepo }}>
            {props.children}
        </RepoContext.Provider>
    );
}



