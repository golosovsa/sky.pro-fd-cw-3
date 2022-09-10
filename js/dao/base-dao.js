class BaseDAO {
    constructor(url, handle, model=Object) {
        this.uri = url + handle;
        this.model = model;
    }

    async get(params) {
        try {
            const parameters = URLSearchParams(params).toString();
            const fullHandle = this.uri + '?' + parameters;

            const response = await fetch(fullHandle, {
                method: "GET",
                cache: "no-cache",
            });

            const data = await response.json();
            
            return data.map(item => new Player(...item));

        } catch (error) {
            console.error(error);
            return [];
        }

    }
}