class BaseDAO {
    constructor(url, handle, model=undefined) {
        this.uri = url + handle;
        this.model = model;
    }

    async _get(params) {
        const fullHandle = params ? this.uri + '?' + new URLSearchParams(params).toString() : this.uri;

        const response = await fetch(fullHandle, {
            method: "GET",
            cache: "no-cache",
        });

        const data = await response.json();
        
        return data;
    }

    async getAll(params=undefined) {
        try {
            const data = await this._get(params);
            const models = (this.model !== undefined) ? data.list.map(item => new this.model(item)) : data.list;
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

    async getOne(params=undefined) {
        try {
            const data = await this._get(params);
            const model = (this.model !== undefined) ? new this.model(data) : data;
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