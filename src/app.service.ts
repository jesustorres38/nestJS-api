// los servicios son metodos para consultar a la base de datos
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { hello: string } {
    return { hello: 'world' };
  }
}
