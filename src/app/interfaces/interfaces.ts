export interface Project{
    id?: number,
    name?: string,
    year?: number,
    type?: string
}

export interface Experience{
    date_from?: string,
    date_to?: string,
    institution?: string,
    role?: string,
    place?: string,
    description?: string,
    technos?: Techno[],
    skills?: Skill[],
    jobs_step?: {
        start: string,
        end: string,
        position: string
    }[]
}

export interface Techno{
    img?: string,
    is_asset_text?: boolean;
    name?: string
}

export interface Skill{
    type?: string,
    technos?: Techno[]
}

export interface Book{
    title?: string,
    img?: string,
    description?: string
}