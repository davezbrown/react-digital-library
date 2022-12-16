let token = 'a7d65fe5ca4e0f27e7121c3071db4f7e281a492b01123b71';

export const server_calls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/books`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    create: async(data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/books`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`http://127.0.0.1:5000/api/books/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
        delete: async(id:string) => {
            const response = await fetch(`http://127.0.0.1:5000/api/books/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }