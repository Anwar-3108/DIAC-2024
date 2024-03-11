export function fetchCount(amount = 1) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('http://localhost:5174/');
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }
  