
import { container } from 'tsyringe';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { DayJsDateProvider } from './DateProvider/implementations/DayjsDateProvider';
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';
import { IStorageProvider } from './MailProvider/StorageProvider/IStorageProvider';
import { LocalStorageProvider } from './MailProvider/StorageProvider/Implementations/LocalStorageProvider';
import { S3StorageProvider } from './MailProvider/StorageProvider/Implementations/S3StorageProvider';



container.registerSingleton<IDateProvider>(
  "DayJsDateProvider",
  DayJsDateProvider
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider
}

container.registerSingleton<IStorageProvider>(
  "StorageProvider",
  diskStorage[process.env.disk]
);