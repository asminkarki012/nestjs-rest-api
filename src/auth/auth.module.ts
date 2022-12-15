import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport/dist';
import { AuthController } from './auth.controller';
import {JwtModule} from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AccessTokenStrategy} from './accessToken.strategy';
import { RefreshTokenStrategy } from './refreshToken.strategy';
@Module({
  imports:[PassportModule,UsersModule,JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  })],
  providers: [AuthService,LocalStrategy,AccessTokenStrategy,RefreshTokenStrategy],
  exports:[AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
