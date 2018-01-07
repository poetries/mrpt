const convertEmptyValueInObj = (obj, replacement) => {
    Object.keys(obj).map(field => {
      const value = obj[field]
      if (value === '-') {
        obj[field] = replacement
      }
    })
    return obj
  }
  
  
export const convertEmptyValue = (data, replacement) => {
    if (Array.isArray(data)) {
      return data.map(obj => {
        return convertEmptyValueInObj(obj, replacement)
      })
    } else {
      return convertEmptyValueInObj(data, replacement)
    }
  }

 