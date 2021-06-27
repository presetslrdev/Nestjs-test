const a: number = 5;
let b: number = 10; // number
let c: string = 'abc'; //string
let d = true; //boolean

// array
let ar: string[] = ['asd', 'as'];

let an: any = 4;
an = 'asd';

function teste(a: string): string | number {
	return '';
}

const test2 = (a: number): number => {
	return a * 3;
};

ar = ar.map(x => x.toUpperCase());

function countCoord(coord: { lat: number, long?: number }) {
}

type Point = { x: number, y: number };

type D3Point = Point & {z:number};

// or
interface IPoint {
	x: number;
	y: number;
}

interface I3DPoint extends IPoint {
	z: number;
}

function printIt(coord: IPoint) {
}

// литеральные типы
type actionType = 'up' | 'down';
function performAction(action: actionType){
	switch (action) {
		case "up": return 'a';
		case "down": return 'b';
	}
}

