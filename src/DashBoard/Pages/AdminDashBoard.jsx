// import React, { useState } from "react";
// import {
//   Users,
//   UserCheck,
//   UserX,
//   CalendarDays,
//   Clock3,
//   Bell,
//   Search,
//   MoreHorizontal,
//   ArrowUpRight,
//   ArrowDownRight,
//   BriefcaseBusiness,
//   WalletCards,
//   MessageCircle,
//   Send,
//   X,
//   Bot,
//   ChevronRight,
//   CalendarCheck,
//   FileText,
// } from "lucide-react";

// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";

// function AdminDashBoard() {
//   const [chatOpen, setChatOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   // =========================
//   // DATA
//   // =========================

//   const attendanceData = [
//     {
//       name: "Present",
//       value: 231,
//     },
//     {
//       name: "Absent",
//       value: 10,
//     },
//     {
//       name: "On Leave",
//       value: 12,
//     },
//   ];

//   const departmentData = [
//     {
//       name: "IT",
//       employees: 72,
//     },
//     {
//       name: "HR",
//       employees: 24,
//     },
//     {
//       name: "Finance",
//       employees: 31,
//     },
//     {
//       name: "Sales",
//       employees: 58,
//     },
//     {
//       name: "Marketing",
//       employees: 36,
//     },
//     {
//       name: "Admin",
//       employees: 27,
//     },
//   ];

//   const monthlyAttendance = [
//     { month: "Jan", present: 218, absent: 18 },
//     { month: "Feb", present: 225, absent: 14 },
//     { month: "Mar", present: 220, absent: 20 },
//     { month: "Apr", present: 233, absent: 11 },
//     { month: "May", present: 227, absent: 16 },
//     { month: "Jun", present: 236, absent: 9 },
//     { month: "Jul", present: 231, absent: 10 },
//     { month: "Aug", present: 239, absent: 8 },
//     { month: "Sep", present: 231, absent: 10 },
//   ];

//   const activities = [
//     {
//       icon: <UserCheck size={17} />,
//       title: "Michael Johnson joined the company",
//       time: "10 minutes ago",
//       type: "success",
//     },
//     {
//       icon: <CalendarCheck size={17} />,
//       title: "12 leave requests are waiting for approval",
//       time: "35 minutes ago",
//       type: "warning",
//     },
//     {
//       icon: <WalletCards size={17} />,
//       title: "September payroll has been processed",
//       time: "1 hour ago",
//       type: "info",
//     },
//     {
//       icon: <FileText size={17} />,
//       title: "New HR policy document uploaded",
//       time: "2 hours ago",
//       type: "purple",
//     },
//   ];

//   const notifications = [
//     {
//       title: "Leave request",
//       description: "Sarah requested 2 days leave",
//       time: "5 min ago",
//     },
//     {
//       title: "Attendance alert",
//       description: "8 employees arrived late today",
//       time: "20 min ago",
//     },
//     {
//       title: "Payroll",
//       description: "Payroll processing completed",
//       time: "1 hr ago",
//     },
//   ];

//   // =========================
//   // CHAT
//   // =========================

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     alert(`You asked AI HR: ${message}`);
//     setMessage("");
//   };

//   return (
//     <div className="space-y-6">

//       {/* ===================================== */}
//       {/* HEADER */}
//       {/* ===================================== */}

//       <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

//         <div>
//           <p className="text-sm font-medium text-indigo-600">
//             Admin Overview
//           </p>

//           <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
//             Dashboard
//           </h1>

//           <p className="mt-1 text-sm text-slate-500">
//             Welcome back, Said 👋 Here's what's happening today.
//           </p>
//         </div>

//         <div className="flex items-center gap-3">

//           <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 sm:flex">
//             <CalendarDays size={17} />
//             Sep 28, 2026
//           </button>

//           <button className="relative rounded-xl border border-slate-200 bg-white p-3 text-slate-500 shadow-sm transition hover:bg-slate-50">
//             <Bell size={19} />

//             <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
//           </button>

//         </div>
//       </div>

//       {/* ===================================== */}
//       {/* SEARCH */}
//       {/* ===================================== */}

//       <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
//         <Search size={19} className="text-slate-400" />

//         <input
//           type="text"
//           placeholder="Search employees, departments, payroll..."
//           className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
//         />

//         <span className="hidden rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-400 md:block">
//           Ctrl + K
//         </span>
//       </div>

//       {/* ===================================== */}
//       {/* KPI CARDS */}
//       {/* ===================================== */}

//       <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

//         {/* Total Employees */}
//         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

//           <div className="flex items-start justify-between">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//               <Users size={22} />
//             </div>

//             <button className="text-slate-400 transition hover:text-slate-700">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>

//           <p className="mt-5 text-sm font-medium text-slate-500">
//             Total Employees
//           </p>

//           <div className="mt-1 flex items-end justify-between">
//             <h2 className="text-3xl font-bold text-slate-900">
//               248
//             </h2>

//             <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
//               <ArrowUpRight size={14} />
//               8.2%
//             </div>
//           </div>

//           <p className="mt-2 text-xs text-slate-400">
//             Compared with last month
//           </p>
//         </div>

//         {/* Present */}
//         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

//           <div className="flex items-start justify-between">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//               <UserCheck size={22} />
//             </div>

//             <button className="text-slate-400 hover:text-slate-700">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>

//           <p className="mt-5 text-sm font-medium text-slate-500">
//             Present Today
//           </p>

//           <div className="mt-1 flex items-end justify-between">
//             <h2 className="text-3xl font-bold text-slate-900">
//               231
//             </h2>

//             <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
//               <ArrowUpRight size={14} />
//               3.4%
//             </div>
//           </div>

//           <p className="mt-2 text-xs text-slate-400">
//             93.1% attendance rate
//           </p>
//         </div>

//         {/* Leave */}
//         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

//           <div className="flex items-start justify-between">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
//               <CalendarDays size={22} />
//             </div>

//             <button className="text-slate-400 hover:text-slate-700">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>

//           <p className="mt-5 text-sm font-medium text-slate-500">
//             On Leave
//           </p>

//           <div className="mt-1 flex items-end justify-between">
//             <h2 className="text-3xl font-bold text-slate-900">
//               12
//             </h2>

//             <div className="flex items-center gap-1 text-xs font-semibold text-red-500">
//               <ArrowDownRight size={14} />
//               1.2%
//             </div>
//           </div>

//           <p className="mt-2 text-xs text-slate-400">
//             5 requests pending
//           </p>
//         </div>

//         {/* Absent */}
//         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

//           <div className="flex items-start justify-between">
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
//               <UserX size={22} />
//             </div>

//             <button className="text-slate-400 hover:text-slate-700">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>

//           <p className="mt-5 text-sm font-medium text-slate-500">
//             Absent Today
//           </p>

//           <div className="mt-1 flex items-end justify-between">
//             <h2 className="text-3xl font-bold text-slate-900">
//               10
//             </h2>

//             <div className="flex items-center gap-1 text-xs font-semibold text-red-500">
//               <ArrowDownRight size={14} />
//               2.1%
//             </div>
//           </div>

//           <p className="mt-2 text-xs text-slate-400">
//             4.0% of total workforce
//           </p>
//         </div>

//       </div>

//       {/* ===================================== */}
//       {/* CHART ROW */}
//       {/* ===================================== */}

//       <div className="grid gap-6 xl:grid-cols-3">

//         {/* Attendance Donut */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div className="flex items-start justify-between">
//             <div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 Today's Attendance
//               </h2>

//               <p className="mt-1 text-sm text-slate-400">
//                 Workforce attendance summary
//               </p>
//             </div>

//             <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>

//           <div className="mt-5 h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>

//                 <Pie
//                   data={attendanceData}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={65}
//                   outerRadius={90}
//                   paddingAngle={4}
//                   dataKey="value"
//                 >
//                   <Cell fill="#4f46e5" />
//                   <Cell fill="#ef4444" />
//                   <Cell fill="#f59e0b" />
//                 </Pie>

//                 <Tooltip />

//                 <Legend
//                   verticalAlign="bottom"
//                   height={36}
//                 />

//               </PieChart>
//             </ResponsiveContainer>
//           </div>

//           <div className="mt-2 text-center">
//             <p className="text-3xl font-bold text-slate-900">
//               93.1%
//             </p>

//             <p className="text-xs text-slate-400">
//               Overall attendance
//             </p>
//           </div>

//         </div>

//         {/* Monthly Attendance */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

//           <div className="flex items-start justify-between">
//             <div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 Attendance Trends
//               </h2>

//               <p className="mt-1 text-sm text-slate-400">
//                 Monthly attendance comparison
//               </p>
//             </div>

//             <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500">
//               This Year
//             </button>
//           </div>

//           <div className="mt-6 h-72">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={monthlyAttendance}>

//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   vertical={false}
//                   stroke="#e2e8f0"
//                 />

//                 <XAxis
//                   dataKey="month"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 12 }}
//                 />

//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fontSize: 12 }}
//                 />

//                 <Tooltip />

//                 <Bar
//                   dataKey="present"
//                   fill="#4f46e5"
//                   radius={[6, 6, 0, 0]}
//                   barSize={18}
//                 />

//                 <Bar
//                   dataKey="absent"
//                   fill="#f87171"
//                   radius={[6, 6, 0, 0]}
//                   barSize={18}
//                 />

//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//         </div>
//       </div>

//       {/* ===================================== */}
//       {/* SECOND ROW */}
//       {/* ===================================== */}

//       <div className="grid gap-6 xl:grid-cols-3">

//         {/* Department Chart */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

//           <div className="flex items-start justify-between">
//             <div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 Employees by Department
//               </h2>

//               <p className="mt-1 text-sm text-slate-400">
//                 Current workforce distribution
//               </p>
//             </div>

//             <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
//               <MoreHorizontal size={20} />
//             </button>
//           </div>

//           <div className="mt-6 h-72">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart
//                 data={departmentData}
//                 layout="vertical"
//                 margin={{
//                   left: 20,
//                   right: 20,
//                 }}
//               >

//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   horizontal={false}
//                 />

//                 <XAxis
//                   type="number"
//                   axisLine={false}
//                   tickLine={false}
//                 />

//                 <YAxis
//                   type="category"
//                   dataKey="name"
//                   axisLine={false}
//                   tickLine={false}
//                 />

//                 <Tooltip />

//                 <Bar
//                   dataKey="employees"
//                   fill="#6366f1"
//                   radius={[0, 6, 6, 0]}
//                   barSize={20}
//                 />

//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//         </div>

//         {/* Notifications */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div className="flex items-center justify-between">

//             <div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 Notifications
//               </h2>

//               <p className="mt-1 text-sm text-slate-400">
//                 Recent updates
//               </p>
//             </div>

//             <button className="text-sm font-semibold text-indigo-600">
//               View All
//             </button>

//           </div>

//           <div className="mt-5 space-y-4">

//             {notifications.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-slate-100"
//               >

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
//                   <Bell size={17} />
//                 </div>

//                 <div className="min-w-0 flex-1">

//                   <p className="text-sm font-semibold text-slate-800">
//                     {item.title}
//                   </p>

//                   <p className="mt-1 text-xs text-slate-500">
//                     {item.description}
//                   </p>

//                   <p className="mt-1 text-[11px] text-slate-400">
//                     {item.time}
//                   </p>

//                 </div>

//               </div>
//             ))}

//           </div>

//           <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
//             See all notifications
//             <ChevronRight size={16} />
//           </button>

//         </div>

//       </div>

//       {/* ===================================== */}
//       {/* ACTIVITY + QUICK ACTIONS */}
//       {/* ===================================== */}

//       <div className="grid gap-6 lg:grid-cols-2">

//         {/* Recent Activity */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div className="flex items-center justify-between">

//             <div>
//               <h2 className="text-lg font-bold text-slate-900">
//                 Recent Activity
//               </h2>

//               <p className="mt-1 text-sm text-slate-400">
//                 Latest HR activities
//               </p>
//             </div>

//             <button className="text-sm font-semibold text-indigo-600">
//               View All
//             </button>

//           </div>

//           <div className="mt-6 space-y-5">

//             {activities.map((activity, index) => (

//               <div
//                 key={index}
//                 className="flex items-center gap-4"
//               >

//                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                   {activity.icon}
//                 </div>

//                 <div className="flex-1">

//                   <p className="text-sm font-medium text-slate-700">
//                     {activity.title}
//                   </p>

//                   <p className="mt-1 text-xs text-slate-400">
//                     {activity.time}
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div>
//             <h2 className="text-lg font-bold text-slate-900">
//               Quick Actions
//             </h2>

//             <p className="mt-1 text-sm text-slate-400">
//               Frequently used HR actions
//             </p>
//           </div>

//           <div className="mt-6 grid grid-cols-2 gap-4">

//             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

//               <Users
//                 size={21}
//                 className="text-indigo-600"
//               />

//               <p className="mt-3 text-sm font-semibold">
//                 Add Employee
//               </p>

//               <p className="mt-1 text-xs text-slate-400">
//                 Create employee profile
//               </p>

//             </button>

//             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

//               <CalendarCheck
//                 size={21}
//                 className="text-indigo-600"
//               />

//               <p className="mt-3 text-sm font-semibold">
//                 Leave Requests
//               </p>

//               <p className="mt-1 text-xs text-slate-400">
//                 Review pending leaves
//               </p>

//             </button>

//             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

//               <WalletCards
//                 size={21}
//                 className="text-indigo-600"
//               />

//               <p className="mt-3 text-sm font-semibold">
//                 Payroll
//               </p>

//               <p className="mt-1 text-xs text-slate-400">
//                 Manage salaries
//               </p>

//             </button>

//             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

//               <BriefcaseBusiness
//                 size={21}
//                 className="text-indigo-600"
//               />

//               <p className="mt-3 text-sm font-semibold">
//                 Recruitment
//               </p>

//               <p className="mt-1 text-xs text-slate-400">
//                 Manage candidates
//               </p>

//             </button>

//           </div>

//         </div>
//       </div>

//       {/* ===================================== */}
//       {/* FLOATING AI BUTTON */}
//       {/* ===================================== */}

//       <button
//         onClick={() => setChatOpen(true)}
//         className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-300 transition hover:scale-110 hover:bg-indigo-700"
//       >
//         <MessageCircle size={24} />
//       </button>

//       {/* ===================================== */}
//       {/* AI CHAT */}
//       {/* ===================================== */}

//       {chatOpen && (
//         <div className="fixed bottom-24 right-6 z-50 flex w-[350px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

//           {/* Header */}
//           <div className="flex items-center justify-between bg-indigo-600 px-5 py-4 text-white">

//             <div className="flex items-center gap-3">

//               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
//                 <Bot size={21} />
//               </div>

//               <div>
//                 <p className="font-semibold">
//                   AI HR Assistant
//                 </p>

//                 <p className="text-xs text-indigo-100">
//                   ● Online
//                 </p>
//               </div>

//             </div>

//             <button
//               onClick={() => setChatOpen(false)}
//               className="rounded-lg p-2 hover:bg-white/10"
//             >
//               <X size={18} />
//             </button>

//           </div>

//           {/* Messages */}
//           <div className="h-72 space-y-4 overflow-y-auto bg-slate-50 p-4">

//             <div className="flex gap-2">

//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//                 <Bot size={15} />
//               </div>

//               <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

//                 <p className="text-sm text-slate-600">
//                   Hi Said 👋
//                 </p>

//                 <p className="mt-1 text-sm text-slate-600">
//                   How can I help you with HR today?
//                 </p>

//               </div>

//             </div>

//             <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-indigo-600 p-3 text-white">

//               <p className="text-sm">
//                 Show me today's attendance.
//               </p>

//             </div>

//             <div className="flex gap-2">

//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//                 <Bot size={15} />
//               </div>

//               <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

//                 <p className="text-sm text-slate-600">
//                   231 employees are present today.
//                   That's a 93.1% attendance rate. 👍
//                 </p>

//               </div>

//             </div>

//           </div>

//           {/* Input */}
//           <div className="border-t border-slate-100 bg-white p-3">

//             <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-2">

//               <input
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleSendMessage();
//                   }
//                 }}
//                 placeholder="Ask AI HR..."
//                 className="flex-1 bg-transparent px-2 text-sm outline-none"
//               />

//               <button
//                 onClick={handleSendMessage}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700"
//               >
//                 <Send size={16} />
//               </button>

//             </div>

//           </div>
//         </div>
//       )}

//     </div>
//   );
// }

// export default AdminDashBoard;


import React, { useEffect, useRef, useState } from "react";

import {
  Users,
  UserCheck,
  UserX,
  CalendarDays,
  Bell,
  Search,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  BriefcaseBusiness,
  WalletCards,
  MessageCircle,
  Send,
  X,
  Bot,
  ChevronRight,
  ChevronLeft,
  CalendarCheck,
  FileText,
  Clock3,
  TrendingUp,
  UserPlus,
  CheckCircle2,
  AlertCircle,
  CircleDollarSign,
  Sparkles,
  Activity,
  Building2,
  Timer,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";


function AdminDashBoard() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  // =========================================================
  // EMPLOYEE CAROUSEL
  // =========================================================

  const employeeScrollRef = useRef(null);

  const employees = [
  {
    id: 1,
    name: "Michael Johnson",
    phone: "+91 98765 43210",
    department: "Information Technology",
    role: "Senior Developer",
    photo: "https://i.pravatar.cc/150?img=12",
    status: "Present",
  },
  {
    id: 2,
    name: "Sarah Williams",
    phone: "+91 98470 12543",
    department: "Human Resources",
    role: "HR Executive",
    photo: "https://i.pravatar.cc/150?img=47",
    status: "Present",
  },
  {
    id: 3,
    name: "David Anderson",
    phone: "+91 97452 78123",
    department: "Finance",
    role: "Accountant",
    photo: "https://i.pravatar.cc/150?img=11",
    status: "Present",
  },
  {
    id: 4,
    name: "Emily Davis",
    phone: "+91 96321 45678",
    department: "Marketing",
    role: "Marketing Manager",
    photo: "https://i.pravatar.cc/150?img=32",
    status: "On Leave",
  },
  {
    id: 5,
    name: "James Wilson",
    phone: "+91 98951 23456",
    department: "Sales",
    role: "Sales Executive",
    photo: "https://i.pravatar.cc/150?img=13",
    status: "Present",
  },
  {
    id: 6,
    name: "Olivia Martin",
    phone: "+91 95678 12345",
    department: "Administration",
    role: "Office Administrator",
    photo: "https://i.pravatar.cc/150?img=44",
    status: "Present",
  },
  {
    id: 7,
    name: "Daniel Thomas",
    phone: "+91 94962 34567",
    department: "Information Technology",
    role: "Software Engineer",
    photo: "https://i.pravatar.cc/150?img=68",
    status: "Present",
  },
  {
    id: 8,
    name: "Sophia Taylor",
    phone: "+91 94471 87654",
    department: "Finance",
    role: "Financial Analyst",
    photo: "https://i.pravatar.cc/150?img=48",
    status: "Absent",
  },
];

  // Automatic scrolling
  useEffect(() => {
    const container = employeeScrollRef.current;

    if (!container) return;

    const interval = setInterval(() => {
      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: 360,
          behavior: "smooth",
        });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollEmployees = (direction) => {
    if (!employeeScrollRef.current) return;

    employeeScrollRef.current.scrollBy({
      left: direction === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };


  // =========================================================
  // DATA
  // =========================================================

  const attendanceData = [
    {
      name: "Present",
      value: 231,
    },
    {
      name: "Absent",
      value: 10,
    },
    {
      name: "On Leave",
      value: 12,
    },
  ];

  const departmentData = [
    {
      name: "IT",
      employees: 72,
    },
    {
      name: "HR",
      employees: 24,
    },
    {
      name: "Finance",
      employees: 31,
    },
    {
      name: "Sales",
      employees: 58,
    },
    {
      name: "Marketing",
      employees: 36,
    },
    {
      name: "Admin",
      employees: 27,
    },
  ];

  const monthlyAttendance = [
    {
      month: "Jan",
      present: 218,
      absent: 18,
    },
    {
      month: "Feb",
      present: 225,
      absent: 14,
    },
    {
      month: "Mar",
      present: 220,
      absent: 20,
    },
    {
      month: "Apr",
      present: 233,
      absent: 11,
    },
    {
      month: "May",
      present: 227,
      absent: 16,
    },
    {
      month: "Jun",
      present: 236,
      absent: 9,
    },
    {
      month: "Jul",
      present: 231,
      absent: 10,
    },
    {
      month: "Aug",
      present: 239,
      absent: 8,
    },
    {
      month: "Sep",
      present: 231,
      absent: 10,
    },
  ];

  const activities = [
    {
      icon: <UserCheck size={17} />,
      title: "Michael Johnson joined the company",
      time: "10 minutes ago",
      type: "success",
    },
    {
      icon: <CalendarCheck size={17} />,
      title: "12 leave requests are waiting for approval",
      time: "35 minutes ago",
      type: "warning",
    },
    {
      icon: <WalletCards size={17} />,
      title: "September payroll has been processed",
      time: "1 hour ago",
      type: "info",
    },
    {
      icon: <FileText size={17} />,
      title: "New HR policy document uploaded",
      time: "2 hours ago",
      type: "purple",
    },
  ];

  const notifications = [
    {
      title: "Leave request",
      description: "Sarah requested 2 days leave",
      time: "5 min ago",
      icon: <CalendarCheck size={17} />,
      type: "warning",
    },
    {
      title: "Attendance alert",
      description: "8 employees arrived late today",
      time: "20 min ago",
      icon: <Clock3 size={17} />,
      type: "danger",
    },
    {
      title: "Payroll",
      description: "Payroll processing completed",
      time: "1 hr ago",
      icon: <WalletCards size={17} />,
      type: "success",
    },
  ];

  const quickActions = [
    {
      title: "Add Employee",
      description: "Create employee profile",
      icon: <UserPlus size={21} />,
    },
    {
      title: "Leave Requests",
      description: "Review pending leaves",
      icon: <CalendarCheck size={21} />,
    },
    {
      title: "Payroll",
      description: "Manage salaries",
      icon: <WalletCards size={21} />,
    },
    {
      title: "Recruitment",
      description: "Manage candidates",
      icon: <BriefcaseBusiness size={21} />,
    },
  ];


  // =========================================================
  // CHAT
  // =========================================================

  const handleSendMessage = () => {
    if (!message.trim()) return;

    alert(`You asked AI HR: ${message}`);

    setMessage("");
  };


  // =========================================================
  // HELPERS
  // =========================================================

  const getActivityStyle = (type) => {
    const styles = {
      success: "bg-emerald-50 text-emerald-600",
      warning: "bg-amber-50 text-amber-600",
      info: "bg-blue-50 text-blue-600",
      purple: "bg-violet-50 text-violet-600",
    };

    return styles[type] || styles.info;
  };

  const getNotificationStyle = (type) => {
    const styles = {
      warning: "bg-amber-50 text-amber-600",
      danger: "bg-rose-50 text-rose-600",
      success: "bg-emerald-50 text-emerald-600",
    };

    return styles[type] || styles.success;
  };


  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-screen space-y-6 bg-slate-50/60 pb-10">


      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

          <div>

            <div className="mb-3 flex items-center gap-2">

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Sparkles size={16} />
              </span>

              <span className="text-sm font-semibold text-indigo-600">
                Admin Overview
              </span>

            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Good evening, Said 👋
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
              Here's what's happening across your organization today.
              Keep an eye on attendance, people, payroll and HR activity.
            </p>

          </div>


          <div className="flex items-center gap-3">

            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100">
              <CalendarDays size={17} />
              Sep 29, 2026
            </button>

            <button className="relative rounded-xl border border-slate-200 bg-white p-3 text-slate-500 shadow-sm transition hover:bg-slate-50">

              <Bell size={19} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />

            </button>

          </div>

        </div>

      </section>


      {/* =====================================================
          SEARCH
      ===================================================== */}

      <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50">

        <Search
          size={19}
          className="text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employees, departments, payroll..."
          className="ml-3 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
        />

        <span className="hidden rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-400 md:block">
          Ctrl + K
        </span>

      </div>


      {/* =====================================================
          KPI CARDS
      ===================================================== */}

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">


        {/* TOTAL EMPLOYEES */}

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-50 transition group-hover:scale-125" />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <Users size={22} />
              </div>

              <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                <MoreHorizontal size={19} />
              </button>

            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Total Employees
            </p>

            <div className="mt-1 flex items-end justify-between">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                248
              </h2>

              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                <ArrowUpRight size={13} />
                8.2%
              </div>

            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <TrendingUp
                size={14}
                className="text-emerald-500"
              />
              Compared with last month
            </div>

          </div>

        </div>


        {/* PRESENT */}

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-50 transition group-hover:scale-125" />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <UserCheck size={22} />
              </div>

              <div className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
                Live
              </div>

            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Present Today
            </p>

            <div className="mt-1 flex items-end justify-between">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                231
              </h2>

              <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
                <ArrowUpRight size={13} />
                3.4%
              </div>

            </div>

            <div className="mt-4 flex items-center justify-between text-xs">

              <span className="text-slate-400">
                Attendance rate
              </span>

              <span className="font-semibold text-emerald-600">
                93.1%
              </span>

            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

              <div className="h-full w-[93%] rounded-full bg-emerald-500" />

            </div>

          </div>

        </div>


        {/* ON LEAVE */}

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-50 transition group-hover:scale-125" />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <CalendarDays size={22} />
              </div>

              <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                <MoreHorizontal size={19} />
              </button>

            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              On Leave
            </p>

            <div className="mt-1 flex items-end justify-between">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                12
              </h2>

              <div className="flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-500">
                <ArrowDownRight size={13} />
                1.2%
              </div>

            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

              <AlertCircle
                size={14}
                className="text-amber-500"
              />

              5 requests pending

            </div>

          </div>

        </div>


        {/* ABSENT */}

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-rose-50 transition group-hover:scale-125" />

          <div className="relative">

            <div className="flex items-start justify-between">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <UserX size={22} />
              </div>

              <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
                <MoreHorizontal size={19} />
              </button>

            </div>

            <p className="mt-5 text-sm font-medium text-slate-500">
              Absent Today
            </p>

            <div className="mt-1 flex items-end justify-between">

              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                10
              </h2>

              <div className="flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-500">
                <ArrowDownRight size={13} />
                2.1%
              </div>

            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

              <Timer
                size={14}
                className="text-rose-500"
              />

              4.0% of total workforce

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          EMPLOYEE CAROUSEL
      ===================================================== */}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">

        {/* HEADER */}

        <div className="mb-5 flex items-center justify-between">

          <div>

            <div className="flex items-center gap-2">

              <h2 className="text-lg font-bold text-slate-900">
                Employees
              </h2>

              <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold text-indigo-600">
                248 TOTAL
              </span>

            </div>

            <p className="mt-1 text-sm text-slate-400">
              Recently active employees
            </p>

          </div>


          <div className="flex items-center gap-2">

            <button
              onClick={() => scrollEmployees("left")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scrollEmployees("right")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ChevronRight size={18} />
            </button>

          </div>

        </div>


        {/* CAROUSEL */}

        <div
          ref={employeeScrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:thin]"
        >

          {employees.map((employee) => (

            <div
              key={employee.id}
              className="group min-w-[calc((100%-32px)/3)] snap-start rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-md"
              style={{
                minWidth: "calc((100% - 32px) / 3)",
              }}
            >

              {/* CARD TOP */}

              <div className="flex items-start justify-between">

                <div className="flex items-center gap-3">

                  <div className="relative">

                   <img
    src={employee.photo}
    alt={employee.name}
    className="h-14 w-14 rounded-2xl object-cover shadow-sm ring-2 ring-white"
  />

  <span
    className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${
      employee.status === "Present"
        ? "bg-emerald-500"
        : employee.status === "On Leave"
        ? "bg-amber-500"
        : "bg-rose-500"
    }`}
  />


                    <span
                      className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${
                        employee.status === "Present"
                          ? "bg-emerald-500"
                          : employee.status === "On Leave"
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      }`}
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-sm font-bold text-slate-800">
                      {employee.name}
                    </p>

                    <p className="mt-0.5 truncate text-xs text-slate-400">
                      {employee.role}
                    </p>

                  </div>

                </div>

                <button className="rounded-lg p-1.5 text-slate-300 transition hover:bg-slate-100 hover:text-slate-600">
                  <MoreHorizontal size={17} />
                </button>

              </div>


              {/* CARD DETAILS */}

              <div className="mt-4 space-y-2.5">

                <div className="flex items-center gap-2 text-xs text-slate-500">

                  <Phone
                    size={14}
                    className="shrink-0 text-slate-400"
                  />

                  <span className="truncate">
                    {employee.phone}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-xs text-slate-500">

                  <Building2
                    size={14}
                    className="shrink-0 text-slate-400"
                  />

                  <span className="truncate">
                    {employee.department}
                  </span>

                </div>

              </div>


              {/* CARD FOOTER */}

              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">

                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                    employee.status === "Present"
                      ? "bg-emerald-50 text-emerald-600"
                      : employee.status === "On Leave"
                      ? "bg-amber-50 text-amber-600"
                      : "bg-rose-50 text-rose-600"
                  }`}
                >
                  {employee.status}
                </span>

                <button className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 opacity-0 transition group-hover:opacity-100">
                  View
                  <ArrowRight size={12} />
                </button>

              </div>

            </div>

          ))}

        </div>


        <div className="mt-2 flex items-center justify-center gap-2 text-[10px] text-slate-400">

          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

          Auto scrolling

          <span>•</span>

          Scroll to explore

        </div>

      </section>


      {/* =====================================================
          TODAY OVERVIEW
      ===================================================== */}

      <div className="grid gap-5 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Clock3 size={19} />
            </div>

            <div>

              <p className="text-xs font-medium text-slate-400">
                Average Check-in
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                09:12 AM
              </p>

            </div>

          </div>

        </div>


        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <CircleDollarSign size={19} />
            </div>

            <div>

              <p className="text-xs font-medium text-slate-400">
                Payroll Status
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                Processed
              </p>

            </div>

            <CheckCircle2
              size={18}
              className="ml-auto text-emerald-500"
            />

          </div>

        </div>


        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <CalendarCheck size={19} />
            </div>

            <div>

              <p className="text-xs font-medium text-slate-400">
                Pending Approvals
              </p>

              <p className="mt-1 text-lg font-bold text-slate-900">
                17 Requests
              </p>

            </div>

            <ArrowRight
              size={18}
              className="ml-auto text-slate-400"
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          ATTENDANCE + TREND
      ===================================================== */}

      <div className="grid gap-6 xl:grid-cols-3">


        {/* ATTENDANCE */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-start justify-between">

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-lg font-bold text-slate-900">
                  Today's Attendance
                </h2>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                  LIVE
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-400">
                Workforce attendance summary
              </p>

            </div>

            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
              <MoreHorizontal size={20} />
            </button>

          </div>


          <div className="relative mt-3 h-64">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <PieChart>

                <Pie
                  data={attendanceData}
                  cx="50%"
                  cy="48%"
                  innerRadius={72}
                  outerRadius={96}
                  paddingAngle={4}
                  dataKey="value"
                  stroke="none"
                >

                  <Cell fill="#4f46e5" />
                  <Cell fill="#f43f5e" />
                  <Cell fill="#f59e0b" />

                </Pie>

                <Tooltip />

                <Legend
                  verticalAlign="bottom"
                  height={35}
                  iconType="circle"
                />

              </PieChart>

            </ResponsiveContainer>


            <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-8">

              <div className="text-center">

                <p className="text-3xl font-bold text-slate-900">
                  93.1%
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Attendance
                </p>

              </div>

            </div>

          </div>


          <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">

            <div className="text-center">
              <p className="text-lg font-bold text-indigo-600">
                231
              </p>
              <p className="text-[11px] text-slate-400">
                Present
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-rose-500">
                10
              </p>
              <p className="text-[11px] text-slate-400">
                Absent
              </p>
            </div>

            <div className="text-center">
              <p className="text-lg font-bold text-amber-500">
                12
              </p>
              <p className="text-[11px] text-slate-400">
                Leave
              </p>
            </div>

          </div>

        </div>


        {/* ATTENDANCE TREND */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

            <div>

              <div className="flex items-center gap-2">

                <h2 className="text-lg font-bold text-slate-900">
                  Attendance Trends
                </h2>

                <TrendingUp
                  size={17}
                  className="text-emerald-500"
                />

              </div>

              <p className="mt-1 text-sm text-slate-400">
                Monthly attendance performance
              </p>

            </div>

            <button className="w-fit rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
              This Year
            </button>

          </div>


          <div className="mt-5 h-72">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <AreaChart data={monthlyAttendance}>

                <defs>

                  <linearGradient
                    id="attendanceGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#4f46e5"
                      stopOpacity={0.25}
                    />

                    <stop
                      offset="100%"
                      stopColor="#4f46e5"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>


                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eef2f7"
                />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#94a3b8",
                  }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: "#94a3b8",
                  }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="present"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  fill="url(#attendanceGradient)"
                />

                <Area
                  type="monotone"
                  dataKey="absent"
                  stroke="#fb7185"
                  strokeWidth={2}
                  fill="transparent"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>


          <div className="flex items-center gap-6 border-t border-slate-100 pt-4 text-xs">

            <div className="flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />

              <span className="text-slate-500">
                Present
              </span>

            </div>

            <div className="flex items-center gap-2">

              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />

              <span className="text-slate-500">
                Absent
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          DEPARTMENT + NOTIFICATIONS
      ===================================================== */}

      <div className="grid gap-6 xl:grid-cols-3">


        {/* DEPARTMENT */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

          <div className="flex items-start justify-between">

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                Employees by Department
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Current workforce distribution
              </p>

            </div>

            <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
              <MoreHorizontal size={20} />
            </button>

          </div>


          <div className="mt-5 h-72">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <BarChart
                data={departmentData}
                layout="vertical"
                margin={{
                  left: 10,
                  right: 20,
                  top: 5,
                  bottom: 5,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  stroke="#eef2f7"
                />

                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 11,
                    fill: "#94a3b8",
                  }}
                />

                <YAxis
                  type="category"
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  width={75}
                  tick={{
                    fontSize: 12,
                    fill: "#64748b",
                  }}
                />

                <Tooltip />

                <Bar
                  dataKey="employees"
                  fill="#6366f1"
                  radius={[0, 8, 8, 0]}
                  barSize={22}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* NOTIFICATIONS */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                Notifications
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Recent updates
              </p>

            </div>

            <button className="text-sm font-semibold text-indigo-600">
              View All
            </button>

          </div>


          <div className="mt-5 space-y-3">

            {notifications.map((item, index) => (

              <div
                key={index}
                className="group flex gap-3 rounded-xl border border-transparent bg-slate-50 p-3 transition hover:border-slate-200 hover:bg-white hover:shadow-sm"
              >

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getNotificationStyle(
                    item.type
                  )}`}
                >
                  {item.icon}
                </div>

                <div className="min-w-0 flex-1">

                  <div className="flex items-start justify-between gap-2">

                    <p className="text-sm font-semibold text-slate-800">
                      {item.title}
                    </p>

                    <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />

                  </div>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {item.description}
                  </p>

                  <p className="mt-1 text-[11px] text-slate-400">
                    {item.time}
                  </p>

                </div>

              </div>

            ))}

          </div>


          <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
            See all notifications
            <ChevronRight size={16} />
          </button>

        </div>

      </div>


      {/* =====================================================
          ACTIVITY + QUICK ACTIONS
      ===================================================== */}

      <div className="grid gap-6 lg:grid-cols-2">


        {/* ACTIVITY */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-slate-400">
                Latest HR activities
              </p>

            </div>

            <button className="text-sm font-semibold text-indigo-600">
              View All
            </button>

          </div>


          <div className="relative mt-7 space-y-6">

            <div className="absolute bottom-3 left-5 top-3 w-px bg-slate-100" />

            {activities.map((activity, index) => (

              <div
                key={index}
                className="relative flex items-center gap-4"
              >

                <div
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getActivityStyle(
                    activity.type
                  )}`}
                >
                  {activity.icon}
                </div>

                <div className="flex-1">

                  <p className="text-sm font-medium text-slate-700">
                    {activity.title}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {activity.time}
                  </p>

                </div>

                <ChevronRight
                  size={16}
                  className="text-slate-300"
                />

              </div>

            ))}

          </div>

        </div>


        {/* QUICK ACTIONS */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Frequently used HR actions
            </p>

          </div>


          <div className="mt-6 grid grid-cols-2 gap-3">

            {quickActions.map((action, index) => (

              <button
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    {action.icon}
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-slate-300 transition group-hover:text-indigo-500"
                  />

                </div>

                <p className="mt-4 text-sm font-semibold text-slate-800">
                  {action.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  {action.description}
                </p>

              </button>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          AI ASSISTANT
      ===================================================== */}

      <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">

        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

          <div className="flex items-center gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <Bot size={24} />
            </div>

            <div>

              <div className="flex items-center gap-2">

                <h3 className="font-bold text-slate-900">
                  AI HR Assistant
                </h3>

                <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
                  ONLINE
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-500">
                Ask about attendance, employees, payroll or leave requests.
              </p>

            </div>

          </div>


          <button
            onClick={() => setChatOpen(true)}
            className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
          >
            <MessageCircle size={17} />
            Open Assistant
          </button>

        </div>

      </div>


      {/* =====================================================
          FLOATING AI BUTTON
      ===================================================== */}

      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-200 transition duration-300 hover:scale-110 hover:bg-indigo-700"
      >
        <MessageCircle size={24} />
      </button>


      {/* =====================================================
          AI CHAT
      ===================================================== */}

      {chatOpen && (

        <div className="fixed bottom-24 right-6 z-50 flex w-[370px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">


          {/* CHAT HEADER */}

          <div className="border-b border-slate-100 bg-white px-5 py-4">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Bot size={21} />
                </div>

                <div>

                  <p className="font-semibold text-slate-900">
                    AI HR Assistant
                  </p>

                  <div className="mt-0.5 flex items-center gap-1.5">

                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                    <p className="text-xs text-slate-400">
                      Online & ready
                    </p>

                  </div>

                </div>

              </div>

              <button
                onClick={() => setChatOpen(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={18} />
              </button>

            </div>

          </div>


          {/* MESSAGES */}

          <div className="h-80 space-y-4 overflow-y-auto bg-slate-50 p-4">

            <div className="flex gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Bot size={15} />
              </div>

              <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

                <p className="text-sm text-slate-600">
                  Hi Said 👋
                </p>

                <p className="mt-1 text-sm text-slate-600">
                  How can I help you with HR today?
                </p>

              </div>

            </div>


            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-indigo-600 p-3 text-white shadow-sm">

              <p className="text-sm">
                Show me today's attendance.
              </p>

            </div>


            <div className="flex gap-2">

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
                <Bot size={15} />
              </div>

              <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

                <p className="text-sm leading-5 text-slate-600">
                  231 employees are present today.
                  That's a 93.1% attendance rate. 👍
                </p>

              </div>

            </div>

          </div>


          {/* INPUT */}

          <div className="border-t border-slate-100 bg-white p-3">

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50">

              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {

                  if (e.key === "Enter") {
                    handleSendMessage();
                  }

                }}
                placeholder="Ask AI HR..."
                className="flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
              />

              <button
                onClick={handleSendMessage}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700"
              >
                <Send size={16} />
              </button>

            </div>

            <p className="mt-2 text-center text-[10px] text-slate-400">
              AI HR can help you navigate your HR data
            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminDashBoard;