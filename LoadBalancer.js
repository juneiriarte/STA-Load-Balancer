export const label ='Round-robin ponderado'
export default class WeightedRoudRobin {
  // import vite.config;
  // Очень важное примечание к этому заданию: все полезные нагрузки запросов должны быть заменены числовым значением строки. В противном случае задание будет считаться невыполненным.

  constructor(servers) {
    // Ejemplo de un servidor:
    // {
    //   id: "server-2",
    //   power: 3,          // Unidades de trabajo por segundo simulado
    //   activeRequest: { id: "P01", payload: "08319462", work: 4 }, // null si está libre
    //   queuedRequests: [{ id: "P02", payload: "74150328", work: 2 }],
    //   activeProgress: 0.25 // Progreso de 0 a 1 (0 si está libre)
    // }
    // Los datos son de solo lectura y se actualizan durante la simulación.
    //this.servers = Object.freeze([...servers]);
    this.servers=servers;
    this.next=0;
    this.c=0;
  }
 
  async onRequestArrival(request, sendToServer) {
    

 
    // Ejemplo de la petición que llega:
    // {
    //   id: "request-17",
    //   payload: "08319462", // Datos que envía el cliente
    //   work: 4              // Unidades de trabajo necesarias
    // }
    let servidor= this.servers [0];
    for (const s of this.servers){
      const conexiones_mio= (servidor.activeRequest ? 1:0 )+servidor.queuedRequests.length;
      const conexiones_tuyo=(s.activeRequest ? 1: 0 )+s.queuedRequests.length;
    
    if (conexiones_tuyo < conexiones_mio){
      servidor=s;
    }
  }
    let serverId=servidor.id;
    
    
    

    // Envía la petición al servidor y devuelve su respuesta al cliente.
    return sendToServer(serverId);
  }
}
