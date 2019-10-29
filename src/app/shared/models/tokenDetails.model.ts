export interface TokenDetailsModel {

    aud: Array<string>;

    user_name: string;

    scope: Array<string>;

    active: string;

    exp: number;

    authorities: Array<string>;

    client_id: string;

}