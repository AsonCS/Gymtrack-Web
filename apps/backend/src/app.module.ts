import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ExercisesModule } from './exercises/exercises.module'
import { UserModule } from './user/user.module'

@Module({
    imports: [ExercisesModule, UserModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
