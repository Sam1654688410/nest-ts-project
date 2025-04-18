import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.login(loginDto.username, loginDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('testGuard')
  onTestGuard(@Request() req: any) {
    return {
      message: 'testGuard',
      user: req.user,
    };
  }
}
