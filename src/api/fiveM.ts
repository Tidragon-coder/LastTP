import axios from "axios";

export async function getPlayerCount(): Promise<number> {
  try {
    const response = await axios.get(
      "https://servers-frontend.fivem.net/api/servers/single/ak3drz"
    );
    return response.data.Data.clients;
  } catch (err) {
    console.error("Erreur lors de la récupération du nombre de joueurs :", err);
    throw new Error("Impossible de récupérer le nombre de joueurs.");
  }
}
