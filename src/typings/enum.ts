export enum ServiceStatus {
  RUNNING = 'Running',
  STOPPED = 'Stopped',
  STARTING = 'StartPending',
  STOPPING = 'StopPending',
  UNKNOWN = 'Unknown',
}

export  enum ServiceStartType {
  AUTO_START = 'AutoStart',
  DEMAND_START = 'DemandStart',
  DISABLED = 'Disabled'
}

export enum InvokeEvent {
  IS_ADMIN = 'is_admin',
  RESTART_AS_ADMIN ='restart_as_admin',
  GET_SERVICE_STATE = 'get_zerotier_state',
  START_ZEROTIER = 'start_zerotier',
  STOP_ZEROTIER = 'stop_zerotier',
  GET_SERVICE_START_TYPE = 'get_zerotier_start_type',
  SET_SERVICE_START_TYPE = 'set_zerotier_start_type',
}
