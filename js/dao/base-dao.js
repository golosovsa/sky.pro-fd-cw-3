class BaseDAO {
    constructor(url, handle, model=Object) {
        this.uri = url + handle;
        this.model = model;
    }

    async _get(params) {
        const parameters = URLSearchParams(params).toString();
        const fullHandle = this.uri + '?' + parameters;

        const response = await fetch(fullHandle, {
            method: "GET",
            cache: "no-cache",
        });

        const data = await response.json();
        
        return data;
    }

    async getAll(params) {
        try {
            const data = await this._get(params);
            const models = data.map(item => new this.model(...item));
            return {
                status: "ok",
                data: models,
            };
        } catch (error) {
            return {
                status: "error",
                data: error,
            };
        }
    }

    async getOne() {
        try {
            const data = await this._get(params);
            const model = this.model(...data);
            return {
                status: "ok",
                data: model,
            };
        } catch (error) {
            return {
                status: "error",
                data: error,
            };
        }
    }
}