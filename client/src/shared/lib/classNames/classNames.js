// function custom classNames

export function classNames(
  cls,
  mods,
  additional,
){
  // връщаме главният клас, останалите класове и филтрираме mods (взимаме само boolean)
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
}