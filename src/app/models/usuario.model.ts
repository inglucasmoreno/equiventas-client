// Modelo - Usuario
export class Usuario {
    constructor(
        public id: number,
        public usuario: string,
        public apellido: string,
        public nombre: string,
        public email: string,
        public dni?: string,
        public role?: string,
        public activo?: boolean,
        public password?: string,
        public createdAt?: string        
    ){}    
}