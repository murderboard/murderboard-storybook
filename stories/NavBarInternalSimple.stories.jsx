import React from "react";
import { NavbarInternal } from "./NavBarInternalSimple";

export default {
  title: "MainApp/NavBar",
  component: NavbarInternal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

// Sample notifications
const notifications = [
  {
    id: '1',
    type: 'sms',
    message: 'New message from Detective Johnson',
    timestamp: '2024-03-20T10:00:00Z',
    read: false
  },
  {
    id: '2',
    type: 'email',
    message: 'Security system alert',
    timestamp: '2024-03-20T09:30:00Z',
    read: true
  },
  {
    id: '3',
    type: 'security',
    message: 'Motion detected in storage room',
    timestamp: '2024-03-20T09:15:00Z',
    read: false
  }
];

// Story with no notifications
export const NoNotifications = {
  args: {
    notifications: []
  }
};

// Story with some notifications
export const WithNotifications = {
  args: {
    notifications
  }
};

// Story with all notifications read
export const AllNotificationsRead = {
  args: {
    notifications: notifications.map(n => ({ ...n, read: true }))
  }
};

// Story with only SMS notifications
export const OnlySMSNotifications = {
  args: {
    notifications: [
      {
        id: '1',
        type: 'sms',
        message: 'New message from Detective Johnson',
        timestamp: '2024-03-20T10:00:00Z',
        read: false
      },
      {
        id: '2',
        type: 'sms',
        message: 'Missed call from Sarah Chen',
        timestamp: '2024-03-20T09:45:00Z',
        read: false
      }
    ]
  }
};

// Story with only security notifications
export const OnlySecurityNotifications = {
  args: {
    notifications: [
      {
        id: '1',
        type: 'security',
        message: 'Motion detected in storage room',
        timestamp: '2024-03-20T09:15:00Z',
        read: false
      },
      {
        id: '2',
        type: 'security',
        message: 'Door opened: Main Entrance',
        timestamp: '2024-03-20T09:00:00Z',
        read: false
      }
    ]
  }
}; 