import { nanoid } from 'nanoid';
import store from 'zustand';
import { toast } from 'react-toastify';

export type Notification = {
  type: 'success' | 'warn' | 'info' | 'error';
  id: string;
  title?: string;
  message: string;
  isNew?: boolean;
};

export type NotificationsStore = {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  dismissNotification: (id: string) => void;
};

export const useNotification = store<NotificationsStore>((set: any) => ({
  notifications: [],
  addNotification: (notification) => {
    const id = nanoid();
    set((state: any) => ({
      notifications: [
        ...state.notifications,
        {
          id,
          ...notification,
        },
      ],
    }));

    setTimeout(() => {
      toast[notification.type](notification.message, { containerId: id });
    }, 500);
  },
  dismissNotification: (id: string) => {
    set((state: any) => ({
      notifications: state.notifications.filter(
        (notification: any) => notification.id !== id,
      ),
    }));
  },
}));
