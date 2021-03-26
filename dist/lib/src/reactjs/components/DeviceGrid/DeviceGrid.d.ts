/*********************************************************************
* Copyright (c) Intel Corporation 2019
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/
import * as React from 'react';
interface gridStates {
    columnDefs: any;
    rowData: any;
    rowSelection: any;
    autoGroupColumnDef: any;
    softSelectedDevice: any;
}
export interface gridProps {
    deviceId: string | null;
    mpsServer: string | null;
    getSelectedDevices?: any;
    selectedDevices?: any;
    filter?: string;
}
export declare class DeviceGrid extends React.Component<gridProps, gridStates> {
    gridApi: any;
    gridColumnApi: any;
    retry_timer: any;
    constructor(props: gridProps);
    componentDidMount(): void;
    connectionStatusControl: () => any;
    fetchDevices: () => Promise<any>;
    filterDeviceList: (devices: any) => any;
    onGridReady: (params: any) => any;
    onSelectionChanged: () => void;
    getSoftSelectId: (id?: {}) => any;
    render(): React.ReactNode;
}
export {};