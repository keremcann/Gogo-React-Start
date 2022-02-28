import { makeAutoObservable, reaction, runInAction } from "mobx";
import agent from './../api/agent';

export default class CatalogStore {
    catalogId = 0;
    catalogName = "";
    success = null;
    infoMessage = null;
    errorMessage = null;
    data = [];
    loading = false;

    constructor() {
        makeAutoObservable(this);
    }

    loadCatalogs = async () => {
        this.loading = true;
        try {
            const catalogs = await agent.Catalogs.list();
            runInAction(() => {
                this.data = catalogs;
                this.loadingActivities = false;
            });
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            });
        }
    }
}