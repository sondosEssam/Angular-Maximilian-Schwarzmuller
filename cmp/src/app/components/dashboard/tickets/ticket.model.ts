
export interface ITicket{
    id:string,
    title:string,
    request:string,
    status: 'open'|'close' 
}