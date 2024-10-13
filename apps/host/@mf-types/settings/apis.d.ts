
    export type RemoteKeys = 'settings/Settings';
    type PackageType<T> = T extends 'settings/Settings' ? typeof import('settings/Settings') :any;