import { config } from "../config/envConfig";

export async function fetchUsers() {
    const response = await fetch(`${config.backend_url}/users`);
    const data = await response.json();
    return data;
}
