// Minimal socket helpers to avoid runtime errors when Socket.IO isn't initialized.
// These are safe no-op stubs for development and can be replaced with a real
// socket server implementation later.

const socketMap = new Map(); // userId -> socketId

export const registerSocket = (userId, socketId) => {
  if (userId && socketId) {
    socketMap.set(String(userId), socketId);
  }
};

export const unregisterSocket = (socketId) => {
  for (const [userId, sId] of socketMap.entries()) {
    if (sId === socketId) {
      socketMap.delete(userId);
      break;
    }
  }
};

export const getReceiverSocketId = (userId) => {
  if (!userId) return null;
  return socketMap.get(String(userId)) || null;
};

export const io = {
  to: () => ({ emit: () => {} }),
};

export default io;
