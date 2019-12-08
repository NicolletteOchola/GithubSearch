export class User {
  constructor (
    public name: string,
    public public_repository: number, 
    public avatar_url: string, 
    public login: string, 
    public company: string, 
    public created_at: Date, 
    public following: number, 
    public followers: number,
    public html_url:string
    )
}
