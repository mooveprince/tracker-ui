export class StockTracker {

    quarter:number;
	stock: string;
	date: Date;
	open: string;
	high: string;
	low: string;
	close: string;
	volume: number;
	percentChangePrice: number;
	percentChangeVolumeOverLastWk: number;
    previousWeeksVolume: number;
	nextWeeksOpen: string;
	nextWeeksClose: string;
	percentChangeNextWeeksPrice: number;
	daysToNextDividend: number;
	percentReturnNextDividend: number;
	requestDate: Date;
    
}