import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
	getHomepage(): string {
		return 'Homepage!';
	}
}