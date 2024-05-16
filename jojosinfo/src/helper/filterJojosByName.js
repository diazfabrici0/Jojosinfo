export const filterJojosByName = (jojos, name = "") => {
    name = name.toLocaleLowerCase().trim();
  
    if (name.length === 0) return [];
  
    return jojos.filter((jojo) => jojo.name.toLowerCase().includes(name));
  };