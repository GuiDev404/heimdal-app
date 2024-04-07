type WindSector = {
  nombre: string;
  rango: [number, number];
};

export function obtenerDireccionViento (grados: number | undefined): string {
  if (!grados) return ''

  // Definir los sectores cardinales y sus rangos en grados
  const sectores: WindSector[] = [
    { nombre: 'Norte', rango: [0, 22.5] },
    { nombre: 'Noreste', rango: [22.5, 67.5] },
    { nombre: 'Este', rango: [67.5, 112.5] },
    { nombre: 'Sureste', rango: [112.5, 157.5] },
    { nombre: 'Sur', rango: [157.5, 202.5] },
    { nombre: 'Suroeste', rango: [202.5, 247.5] },
    { nombre: 'Oeste', rango: [247.5, 292.5] },
    { nombre: 'Noroeste', rango: [292.5, 337.5] },
    { nombre: 'Norte', rango: [337.5, 360] } // 360 es lo mismo que 0
  ]

  // Buscar el sector correspondiente al grado proporcionado
  for (const sector of sectores) {
    if (grados >= sector.rango[0] && grados < sector.rango[1]) {
      return sector.nombre
    }
  }

  // Si el grado no está en ninguno de los rangos anteriores, retornar 'Desconocido'
  return '' // Desconocido
}
