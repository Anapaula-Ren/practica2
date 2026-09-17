/*export const getStudent = (): Promise<string>=>{
    return new Promise((resolve, reject)=>{
        setTimeout (()=>{
         resolve ('se ejecuto bien')   
        }, 3000);
        
   reject ('no se ejecuto bien')
    })
}*/

export const getStudent = (estaReprobado: boolean): Promise<string>=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (estaReprobado) {
                reject ('El estudiante reprobo la materia')
            } else {
                resolve ('El estudiante aprobo la materia')
            }
        },3000);        
        reject ('No se ejecuto la promesa')
    })
}