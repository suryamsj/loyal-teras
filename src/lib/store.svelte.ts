import type { NotificationType } from "./types";

function createCustomStore(){
  let isMobile = $state(false);
let sidebarOpen = $state(true);
let mobileMenuOpen = $state(false);
let showNotifications = $state(false);
let showProfileMenu = $state(false);

const notifications = $state<NotificationType[]>([
  { id: 1, text: 'Pesanan baru telah masuk', time: '5 menit yang lalu', read: false },
  { id: 2, text: 'Pembayaran berhasil dikonfirmasi', time: '1 jam yang lalu', read: false },
  { id: 3, text: 'Update sistem berhasil', time: '1 hari yang lalu', read: true }
]);

function checkScreenSize(): void {
  isMobile = window.innerWidth < 768;
  if (isMobile) {
    sidebarOpen = false;
  } else {
    sidebarOpen = true;
    mobileMenuOpen = false;
  }
}

function toggleSidebar(): void {
  if (isMobile) {
    mobileMenuOpen = !mobileMenuOpen;
  } else {
    sidebarOpen = !sidebarOpen;
  }
}

function toggleNotifications(): void {
  showNotifications = !showNotifications;
  showProfileMenu = false;
}

function toggleProfileMenu(): void {
  showProfileMenu = !showProfileMenu;
  showNotifications = false;
}

function closeMobileMenu(): void {
  if (isMobile && mobileMenuOpen) {
    mobileMenuOpen = false;
  }
}

function getUnreadCount(): number {
  return notifications.filter((n) => !n.read).length;
}

return {
  get isMobile() {
    return isMobile;
  },
  get sidebarOpen() {
    return sidebarOpen;
  },
  get mobileMenuOpen() {
    return mobileMenuOpen;
  },
  get showNotifications() {
    return showNotifications;
  },
  get showProfileMenu() {
    return showProfileMenu;
  },
  get notifications() {
    return notifications;
  },
  checkScreenSize,
  toggleSidebar,
  toggleNotifications,
  toggleProfileMenu,
  closeMobileMenu,
  getUnreadCount
}
}

export const store = createCustomStore();
