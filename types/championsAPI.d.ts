export interface User {
  address: string;
  avatar: string;
  badges: string[];
  banner: string;
  birthday: string;
  coins: number;
  discord: string;
  exp: number;
  gender: string;
  groups: string[];
  name: string;
  nick: string;
  state: string;
  surname: string;
  user_id: number;
  vips: Record<string, number>;
}

export interface Team {
  id: number;
  avatar: string;
  banner: string;
  members: User[];
  name: string;
  owner: number;
  points: number;
  position: number;
  premium: number;
  slots: number;
  tag: string;
}

export interface Season {
  type: string;
  name: string;
  start_timestamp: number;
  winner: Team;
  teams: Team[];
}

export interface CategorySeasons {
  [seasonName: string]: Season;
}

export interface WinnersResponse {
  DAILY: CategorySeasons;
  WEEKEND: CategorySeasons;
  QUARTER: CategorySeasons;
}

export interface ParticipatingTeam {
  id: number;
  logo: string;
  name: string;
  points: number;
  position: number;
  team: string;
}

enum ChampionshipStatus {
  LIVE = "AO VIVO",
  FINISHED = "CONCLUÍDO",
  UPCOMING = "EM BREVE",
}

export interface Championship {
  label: string;
  nameChampionship: string;
  textMode: string;
  date: string;
  status: ChampionshipStatus;
  participatingTeam: ParticipatingTeam[];
}

export interface Match {
  gameId: string;
  squadId: string;
  winner: number;
}

export interface Slot {
  guildId: number;
  status: string;
  wins: number;
}

export interface Bracket {
  finished: boolean;
  initialized: boolean;
  match: number;
  matches: Record<string, Match>;
  maxMatches: number;
  slots: Slot[];
  startAt: number;
}

export interface ChampionshipResponse {
  champion: {
    DAILY: Championship;
    WEEKEND: Championship;
    QUARTER: Championship;
  };
  bracket: Record<string, Bracket>;
}
