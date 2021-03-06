/**
 * Mojang API endpoints
 * credit to wiki.vg
 * @link https://wiki.vg
 *
 * These are constants that point to all the endpoints we use in Player.ts.
 * Here's a map of all of them:
 *
 * - get.uuid: Playername -> UUID
 *   - Replace "{playername}" with the playername you're targeting
 *
 * - get.nameHistory: UUID -> Name history
 *   - Replace "{uuid}" with the player's UUID you're targeting
 *
 * - get.profile: UUID -> Profile + Skin/Cape
 *   - Replace "{uuid}" with the player's UUID you're targeting
 */

/**
 * This is all the servers we utilize.
 * NOTE: They should all utilize TLS if it's offered
 * @const servers
 */
const servers = {
  api: "https://api.mojang.com",
  sessions: "https://sessionserver.mojang.com"
}

/**
 * All the GET endpoints
 * @const get
 */
export const get = {
  /**
   * Playername -> UUID
   * @link https://wiki.vg/Mojang_API#Username_-.3E_UUID_at_time
   */
  uuid: `${servers.api}/users/profiles/minecraft/{playername}`,

  /**
   * UUID -> Name history
   * @link https://wiki.vg/Mojang_API#UUID_-.3E_Name_history
   */
  nameHistory: `${servers.api}/user/profiles/{uuid}/names`,

  /**
   * UUID -> Profile + Skin/Cape
   * @link https://wiki.vg/Mojang_API#UUID_-.3E_Profile_.2B_Skin.2FCape
   */
  profile: `${servers.sessions}/session/minecraft/profile/{uuid}`
};

