import { sleep } from "@helpers/sleep";
import { GitHubLabel } from "../interfaces/github-label.interface";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const TOKEN = environment.gitHubToken;

export const getLabels = async (): Promise<GitHubLabel[]> => {

    await sleep(1500);

    try {
        const resp = await fetch(`${BASE_URL}/labels`,
            {
                headers: {
                    'Authorization': `Bearer ${TOKEN}`
                }
            }
        );

        if (!resp.ok) throw "Can't load labels";
        const labels: GitHubLabel[] = await resp.json();

        return labels;

    } catch (error) {
        throw "Can't load labels"
    }
}