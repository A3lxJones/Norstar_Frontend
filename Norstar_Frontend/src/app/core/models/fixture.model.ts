export interface Fixture {
    id: number;
    opponent: string;
    date: string;
    location: string;
}

export interface CreateFixtureDto {
    opponent: string;
    date: string;
    location: string;
}

export interface UpdateFixtureDto {
    opponent?: string;
    date?: string;
    location?: string;
}