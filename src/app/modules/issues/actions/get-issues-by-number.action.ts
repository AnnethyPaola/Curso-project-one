import { sleep } from "@helpers/sleep";
import { environment } from "src/environments/environment.development";
import { GitHubIssues } from "../interfaces";

const BASE_URL = environment.baseUrl;
const TOKEN = environment.tk;

export const getIssueByNumber = async (issueNumber: string): Promise<GitHubIssues> => {

    await sleep(1500);

    try {
        const resp = await fetch(`${BASE_URL}/issues/${issueNumber}`,
            {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            }
        );

        if (!resp.ok) throw "Can't load issue";
        const issues: GitHubIssues = await resp.json();
        console.log({ issues });

        return issues;

    } catch (error) {
        throw "Can't load issue"
    }
}