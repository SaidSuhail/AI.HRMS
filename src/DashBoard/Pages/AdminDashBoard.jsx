// // import React, { useState } from "react";
// // import {
// //   Users,
// //   UserCheck,
// //   UserX,
// //   CalendarDays,
// //   Clock3,
// //   Bell,
// //   Search,
// //   MoreHorizontal,
// //   ArrowUpRight,
// //   ArrowDownRight,
// //   BriefcaseBusiness,
// //   WalletCards,
// //   MessageCircle,
// //   Send,
// //   X,
// //   Bot,
// //   ChevronRight,
// //   CalendarCheck,
// //   FileText,
// // } from "lucide-react";

// // import {
// //   ResponsiveContainer,
// //   PieChart,
// //   Pie,
// //   Cell,
// //   Tooltip,
// //   Legend,
// //   BarChart,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// // } from "recharts";

// // function AdminDashBoard() {
// //   const [chatOpen, setChatOpen] = useState(false);
// //   const [message, setMessage] = useState("");

// //   // =========================
// //   // DATA
// //   // =========================

// //   const attendanceData = [
// //     {
// //       name: "Present",
// //       value: 231,
// //     },
// //     {
// //       name: "Absent",
// //       value: 10,
// //     },
// //     {
// //       name: "On Leave",
// //       value: 12,
// //     },
// //   ];

// //   const departmentData = [
// //     {
// //       name: "IT",
// //       employees: 72,
// //     },
// //     {
// //       name: "HR",
// //       employees: 24,
// //     },
// //     {
// //       name: "Finance",
// //       employees: 31,
// //     },
// //     {
// //       name: "Sales",
// //       employees: 58,
// //     },
// //     {
// //       name: "Marketing",
// //       employees: 36,
// //     },
// //     {
// //       name: "Admin",
// //       employees: 27,
// //     },
// //   ];

// //   const monthlyAttendance = [
// //     { month: "Jan", present: 218, absent: 18 },
// //     { month: "Feb", present: 225, absent: 14 },
// //     { month: "Mar", present: 220, absent: 20 },
// //     { month: "Apr", present: 233, absent: 11 },
// //     { month: "May", present: 227, absent: 16 },
// //     { month: "Jun", present: 236, absent: 9 },
// //     { month: "Jul", present: 231, absent: 10 },
// //     { month: "Aug", present: 239, absent: 8 },
// //     { month: "Sep", present: 231, absent: 10 },
// //   ];

// //   const activities = [
// //     {
// //       icon: <UserCheck size={17} />,
// //       title: "Michael Johnson joined the company",
// //       time: "10 minutes ago",
// //       type: "success",
// //     },
// //     {
// //       icon: <CalendarCheck size={17} />,
// //       title: "12 leave requests are waiting for approval",
// //       time: "35 minutes ago",
// //       type: "warning",
// //     },
// //     {
// //       icon: <WalletCards size={17} />,
// //       title: "September payroll has been processed",
// //       time: "1 hour ago",
// //       type: "info",
// //     },
// //     {
// //       icon: <FileText size={17} />,
// //       title: "New HR policy document uploaded",
// //       time: "2 hours ago",
// //       type: "purple",
// //     },
// //   ];

// //   const notifications = [
// //     {
// //       title: "Leave request",
// //       description: "Sarah requested 2 days leave",
// //       time: "5 min ago",
// //     },
// //     {
// //       title: "Attendance alert",
// //       description: "8 employees arrived late today",
// //       time: "20 min ago",
// //     },
// //     {
// //       title: "Payroll",
// //       description: "Payroll processing completed",
// //       time: "1 hr ago",
// //     },
// //   ];

// //   // =========================
// //   // CHAT
// //   // =========================

// //   const handleSendMessage = () => {
// //     if (!message.trim()) return;

// //     alert(`You asked AI HR: ${message}`);
// //     setMessage("");
// //   };

// //   return (
// //     <div className="space-y-6">

// //       {/* ===================================== */}
// //       {/* HEADER */}
// //       {/* ===================================== */}

// //       <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

// //         <div>
// //           <p className="text-sm font-medium text-indigo-600">
// //             Admin Overview
// //           </p>

// //           <h1 className="mt-1 text-3xl font-bold tracking-tight text-slate-900">
// //             Dashboard
// //           </h1>

// //           <p className="mt-1 text-sm text-slate-500">
// //             Welcome back, Said 👋 Here's what's happening today.
// //           </p>
// //         </div>

// //         <div className="flex items-center gap-3">

// //           <button className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 sm:flex">
// //             <CalendarDays size={17} />
// //             Sep 28, 2026
// //           </button>

// //           <button className="relative rounded-xl border border-slate-200 bg-white p-3 text-slate-500 shadow-sm transition hover:bg-slate-50">
// //             <Bell size={19} />

// //             <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
// //           </button>

// //         </div>
// //       </div>

// //       {/* ===================================== */}
// //       {/* SEARCH */}
// //       {/* ===================================== */}

// //       <div className="flex items-center rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
// //         <Search size={19} className="text-slate-400" />

// //         <input
// //           type="text"
// //           placeholder="Search employees, departments, payroll..."
// //           className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
// //         />

// //         <span className="hidden rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-400 md:block">
// //           Ctrl + K
// //         </span>
// //       </div>

// //       {/* ===================================== */}
// //       {/* KPI CARDS */}
// //       {/* ===================================== */}

// //       <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

// //         {/* Total Employees */}
// //         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

// //           <div className="flex items-start justify-between">
// //             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
// //               <Users size={22} />
// //             </div>

// //             <button className="text-slate-400 transition hover:text-slate-700">
// //               <MoreHorizontal size={20} />
// //             </button>
// //           </div>

// //           <p className="mt-5 text-sm font-medium text-slate-500">
// //             Total Employees
// //           </p>

// //           <div className="mt-1 flex items-end justify-between">
// //             <h2 className="text-3xl font-bold text-slate-900">
// //               248
// //             </h2>

// //             <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
// //               <ArrowUpRight size={14} />
// //               8.2%
// //             </div>
// //           </div>

// //           <p className="mt-2 text-xs text-slate-400">
// //             Compared with last month
// //           </p>
// //         </div>

// //         {/* Present */}
// //         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

// //           <div className="flex items-start justify-between">
// //             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
// //               <UserCheck size={22} />
// //             </div>

// //             <button className="text-slate-400 hover:text-slate-700">
// //               <MoreHorizontal size={20} />
// //             </button>
// //           </div>

// //           <p className="mt-5 text-sm font-medium text-slate-500">
// //             Present Today
// //           </p>

// //           <div className="mt-1 flex items-end justify-between">
// //             <h2 className="text-3xl font-bold text-slate-900">
// //               231
// //             </h2>

// //             <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
// //               <ArrowUpRight size={14} />
// //               3.4%
// //             </div>
// //           </div>

// //           <p className="mt-2 text-xs text-slate-400">
// //             93.1% attendance rate
// //           </p>
// //         </div>

// //         {/* Leave */}
// //         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

// //           <div className="flex items-start justify-between">
// //             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
// //               <CalendarDays size={22} />
// //             </div>

// //             <button className="text-slate-400 hover:text-slate-700">
// //               <MoreHorizontal size={20} />
// //             </button>
// //           </div>

// //           <p className="mt-5 text-sm font-medium text-slate-500">
// //             On Leave
// //           </p>

// //           <div className="mt-1 flex items-end justify-between">
// //             <h2 className="text-3xl font-bold text-slate-900">
// //               12
// //             </h2>

// //             <div className="flex items-center gap-1 text-xs font-semibold text-red-500">
// //               <ArrowDownRight size={14} />
// //               1.2%
// //             </div>
// //           </div>

// //           <p className="mt-2 text-xs text-slate-400">
// //             5 requests pending
// //           </p>
// //         </div>

// //         {/* Absent */}
// //         <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">

// //           <div className="flex items-start justify-between">
// //             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
// //               <UserX size={22} />
// //             </div>

// //             <button className="text-slate-400 hover:text-slate-700">
// //               <MoreHorizontal size={20} />
// //             </button>
// //           </div>

// //           <p className="mt-5 text-sm font-medium text-slate-500">
// //             Absent Today
// //           </p>

// //           <div className="mt-1 flex items-end justify-between">
// //             <h2 className="text-3xl font-bold text-slate-900">
// //               10
// //             </h2>

// //             <div className="flex items-center gap-1 text-xs font-semibold text-red-500">
// //               <ArrowDownRight size={14} />
// //               2.1%
// //             </div>
// //           </div>

// //           <p className="mt-2 text-xs text-slate-400">
// //             4.0% of total workforce
// //           </p>
// //         </div>

// //       </div>

// //       {/* ===================================== */}
// //       {/* CHART ROW */}
// //       {/* ===================================== */}

// //       <div className="grid gap-6 xl:grid-cols-3">

// //         {/* Attendance Donut */}
// //         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

// //           <div className="flex items-start justify-between">
// //             <div>
// //               <h2 className="text-lg font-bold text-slate-900">
// //                 Today's Attendance
// //               </h2>

// //               <p className="mt-1 text-sm text-slate-400">
// //                 Workforce attendance summary
// //               </p>
// //             </div>

// //             <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
// //               <MoreHorizontal size={20} />
// //             </button>
// //           </div>

// //           <div className="mt-5 h-64">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <PieChart>

// //                 <Pie
// //                   data={attendanceData}
// //                   cx="50%"
// //                   cy="50%"
// //                   innerRadius={65}
// //                   outerRadius={90}
// //                   paddingAngle={4}
// //                   dataKey="value"
// //                 >
// //                   <Cell fill="#4f46e5" />
// //                   <Cell fill="#ef4444" />
// //                   <Cell fill="#f59e0b" />
// //                 </Pie>

// //                 <Tooltip />

// //                 <Legend
// //                   verticalAlign="bottom"
// //                   height={36}
// //                 />

// //               </PieChart>
// //             </ResponsiveContainer>
// //           </div>

// //           <div className="mt-2 text-center">
// //             <p className="text-3xl font-bold text-slate-900">
// //               93.1%
// //             </p>

// //             <p className="text-xs text-slate-400">
// //               Overall attendance
// //             </p>
// //           </div>

// //         </div>

// //         {/* Monthly Attendance */}
// //         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

// //           <div className="flex items-start justify-between">
// //             <div>
// //               <h2 className="text-lg font-bold text-slate-900">
// //                 Attendance Trends
// //               </h2>

// //               <p className="mt-1 text-sm text-slate-400">
// //                 Monthly attendance comparison
// //               </p>
// //             </div>

// //             <button className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500">
// //               This Year
// //             </button>
// //           </div>

// //           <div className="mt-6 h-72">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <BarChart data={monthlyAttendance}>

// //                 <CartesianGrid
// //                   strokeDasharray="3 3"
// //                   vertical={false}
// //                   stroke="#e2e8f0"
// //                 />

// //                 <XAxis
// //                   dataKey="month"
// //                   axisLine={false}
// //                   tickLine={false}
// //                   tick={{ fontSize: 12 }}
// //                 />

// //                 <YAxis
// //                   axisLine={false}
// //                   tickLine={false}
// //                   tick={{ fontSize: 12 }}
// //                 />

// //                 <Tooltip />

// //                 <Bar
// //                   dataKey="present"
// //                   fill="#4f46e5"
// //                   radius={[6, 6, 0, 0]}
// //                   barSize={18}
// //                 />

// //                 <Bar
// //                   dataKey="absent"
// //                   fill="#f87171"
// //                   radius={[6, 6, 0, 0]}
// //                   barSize={18}
// //                 />

// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //         </div>
// //       </div>

// //       {/* ===================================== */}
// //       {/* SECOND ROW */}
// //       {/* ===================================== */}

// //       <div className="grid gap-6 xl:grid-cols-3">

// //         {/* Department Chart */}
// //         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

// //           <div className="flex items-start justify-between">
// //             <div>
// //               <h2 className="text-lg font-bold text-slate-900">
// //                 Employees by Department
// //               </h2>

// //               <p className="mt-1 text-sm text-slate-400">
// //                 Current workforce distribution
// //               </p>
// //             </div>

// //             <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
// //               <MoreHorizontal size={20} />
// //             </button>
// //           </div>

// //           <div className="mt-6 h-72">
// //             <ResponsiveContainer width="100%" height="100%">
// //               <BarChart
// //                 data={departmentData}
// //                 layout="vertical"
// //                 margin={{
// //                   left: 20,
// //                   right: 20,
// //                 }}
// //               >

// //                 <CartesianGrid
// //                   strokeDasharray="3 3"
// //                   horizontal={false}
// //                 />

// //                 <XAxis
// //                   type="number"
// //                   axisLine={false}
// //                   tickLine={false}
// //                 />

// //                 <YAxis
// //                   type="category"
// //                   dataKey="name"
// //                   axisLine={false}
// //                   tickLine={false}
// //                 />

// //                 <Tooltip />

// //                 <Bar
// //                   dataKey="employees"
// //                   fill="#6366f1"
// //                   radius={[0, 6, 6, 0]}
// //                   barSize={20}
// //                 />

// //               </BarChart>
// //             </ResponsiveContainer>
// //           </div>

// //         </div>

// //         {/* Notifications */}
// //         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

// //           <div className="flex items-center justify-between">

// //             <div>
// //               <h2 className="text-lg font-bold text-slate-900">
// //                 Notifications
// //               </h2>

// //               <p className="mt-1 text-sm text-slate-400">
// //                 Recent updates
// //               </p>
// //             </div>

// //             <button className="text-sm font-semibold text-indigo-600">
// //               View All
// //             </button>

// //           </div>

// //           <div className="mt-5 space-y-4">

// //             {notifications.map((item, index) => (
// //               <div
// //                 key={index}
// //                 className="flex gap-3 rounded-xl bg-slate-50 p-3 transition hover:bg-slate-100"
// //               >

// //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
// //                   <Bell size={17} />
// //                 </div>

// //                 <div className="min-w-0 flex-1">

// //                   <p className="text-sm font-semibold text-slate-800">
// //                     {item.title}
// //                   </p>

// //                   <p className="mt-1 text-xs text-slate-500">
// //                     {item.description}
// //                   </p>

// //                   <p className="mt-1 text-[11px] text-slate-400">
// //                     {item.time}
// //                   </p>

// //                 </div>

// //               </div>
// //             ))}

// //           </div>

// //           <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">
// //             See all notifications
// //             <ChevronRight size={16} />
// //           </button>

// //         </div>

// //       </div>

// //       {/* ===================================== */}
// //       {/* ACTIVITY + QUICK ACTIONS */}
// //       {/* ===================================== */}

// //       <div className="grid gap-6 lg:grid-cols-2">

// //         {/* Recent Activity */}
// //         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

// //           <div className="flex items-center justify-between">

// //             <div>
// //               <h2 className="text-lg font-bold text-slate-900">
// //                 Recent Activity
// //               </h2>

// //               <p className="mt-1 text-sm text-slate-400">
// //                 Latest HR activities
// //               </p>
// //             </div>

// //             <button className="text-sm font-semibold text-indigo-600">
// //               View All
// //             </button>

// //           </div>

// //           <div className="mt-6 space-y-5">

// //             {activities.map((activity, index) => (

// //               <div
// //                 key={index}
// //                 className="flex items-center gap-4"
// //               >

// //                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
// //                   {activity.icon}
// //                 </div>

// //                 <div className="flex-1">

// //                   <p className="text-sm font-medium text-slate-700">
// //                     {activity.title}
// //                   </p>

// //                   <p className="mt-1 text-xs text-slate-400">
// //                     {activity.time}
// //                   </p>

// //                 </div>

// //               </div>

// //             ))}

// //           </div>
// //         </div>

// //         {/* Quick Actions */}
// //         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

// //           <div>
// //             <h2 className="text-lg font-bold text-slate-900">
// //               Quick Actions
// //             </h2>

// //             <p className="mt-1 text-sm text-slate-400">
// //               Frequently used HR actions
// //             </p>
// //           </div>

// //           <div className="mt-6 grid grid-cols-2 gap-4">

// //             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

// //               <Users
// //                 size={21}
// //                 className="text-indigo-600"
// //               />

// //               <p className="mt-3 text-sm font-semibold">
// //                 Add Employee
// //               </p>

// //               <p className="mt-1 text-xs text-slate-400">
// //                 Create employee profile
// //               </p>

// //             </button>

// //             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

// //               <CalendarCheck
// //                 size={21}
// //                 className="text-indigo-600"
// //               />

// //               <p className="mt-3 text-sm font-semibold">
// //                 Leave Requests
// //               </p>

// //               <p className="mt-1 text-xs text-slate-400">
// //                 Review pending leaves
// //               </p>

// //             </button>

// //             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

// //               <WalletCards
// //                 size={21}
// //                 className="text-indigo-600"
// //               />

// //               <p className="mt-3 text-sm font-semibold">
// //                 Payroll
// //               </p>

// //               <p className="mt-1 text-xs text-slate-400">
// //                 Manage salaries
// //               </p>

// //             </button>

// //             <button className="group rounded-xl border border-slate-200 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50">

// //               <BriefcaseBusiness
// //                 size={21}
// //                 className="text-indigo-600"
// //               />

// //               <p className="mt-3 text-sm font-semibold">
// //                 Recruitment
// //               </p>

// //               <p className="mt-1 text-xs text-slate-400">
// //                 Manage candidates
// //               </p>

// //             </button>

// //           </div>

// //         </div>
// //       </div>

// //       {/* ===================================== */}
// //       {/* FLOATING AI BUTTON */}
// //       {/* ===================================== */}

// //       <button
// //         onClick={() => setChatOpen(true)}
// //         className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-300 transition hover:scale-110 hover:bg-indigo-700"
// //       >
// //         <MessageCircle size={24} />
// //       </button>

// //       {/* ===================================== */}
// //       {/* AI CHAT */}
// //       {/* ===================================== */}

// //       {chatOpen && (
// //         <div className="fixed bottom-24 right-6 z-50 flex w-[350px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

// //           {/* Header */}
// //           <div className="flex items-center justify-between bg-indigo-600 px-5 py-4 text-white">

// //             <div className="flex items-center gap-3">

// //               <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
// //                 <Bot size={21} />
// //               </div>

// //               <div>
// //                 <p className="font-semibold">
// //                   AI HR Assistant
// //                 </p>

// //                 <p className="text-xs text-indigo-100">
// //                   ● Online
// //                 </p>
// //               </div>

// //             </div>

// //             <button
// //               onClick={() => setChatOpen(false)}
// //               className="rounded-lg p-2 hover:bg-white/10"
// //             >
// //               <X size={18} />
// //             </button>

// //           </div>

// //           {/* Messages */}
// //           <div className="h-72 space-y-4 overflow-y-auto bg-slate-50 p-4">

// //             <div className="flex gap-2">

// //               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
// //                 <Bot size={15} />
// //               </div>

// //               <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

// //                 <p className="text-sm text-slate-600">
// //                   Hi Said 👋
// //                 </p>

// //                 <p className="mt-1 text-sm text-slate-600">
// //                   How can I help you with HR today?
// //                 </p>

// //               </div>

// //             </div>

// //             <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-indigo-600 p-3 text-white">

// //               <p className="text-sm">
// //                 Show me today's attendance.
// //               </p>

// //             </div>

// //             <div className="flex gap-2">

// //               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
// //                 <Bot size={15} />
// //               </div>

// //               <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

// //                 <p className="text-sm text-slate-600">
// //                   231 employees are present today.
// //                   That's a 93.1% attendance rate. 👍
// //                 </p>

// //               </div>

// //             </div>

// //           </div>

// //           {/* Input */}
// //           <div className="border-t border-slate-100 bg-white p-3">

// //             <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-2">

// //               <input
// //                 type="text"
// //                 value={message}
// //                 onChange={(e) => setMessage(e.target.value)}
// //                 onKeyDown={(e) => {
// //                   if (e.key === "Enter") {
// //                     handleSendMessage();
// //                   }
// //                 }}
// //                 placeholder="Ask AI HR..."
// //                 className="flex-1 bg-transparent px-2 text-sm outline-none"
// //               />

// //               <button
// //                 onClick={handleSendMessage}
// //                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700"
// //               >
// //                 <Send size={16} />
// //               </button>

// //             </div>

// //           </div>
// //         </div>
// //       )}

// //     </div>
// //   );
// // }

// // export default AdminDashBoard;


// import React, { useEffect, useRef, useState } from "react";

// import {
//   Users,
//   UserCheck,
//   UserX,
//   CalendarDays,
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
//   ChevronLeft,
//   CalendarCheck,
//   FileText,
//   Clock3,
//   TrendingUp,
//   UserPlus,
//   CheckCircle2,
//   AlertCircle,
//   CircleDollarSign,
//   Sparkles,
//   Activity,
//   Building2,
//   Timer,
//   ArrowRight,
//   Phone,
//   Mail,
//   MapPin,
// } from "lucide-react";

// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
//   AreaChart,
//   Area,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
// } from "recharts";


// function AdminDashBoard() {
//   const [chatOpen, setChatOpen] = useState(false);
//   const [message, setMessage] = useState("");

//   // =========================================================
//   // EMPLOYEE CAROUSEL
//   // =========================================================

//   const employeeScrollRef = useRef(null);

//   const employees = [
//   {
//     id: 1,
//     name: "Michael Johnson",
//     phone: "+91 98765 43210",
//     department: "Information Technology",
//     role: "Senior Developer",
//     photo: "https://i.pravatar.cc/150?img=12",
//     status: "Present",
//   },
//   {
//     id: 2,
//     name: "Sarah Williams",
//     phone: "+91 98470 12543",
//     department: "Human Resources",
//     role: "HR Executive",
//     photo: "https://i.pravatar.cc/150?img=47",
//     status: "Present",
//   },
//   {
//     id: 3,
//     name: "David Anderson",
//     phone: "+91 97452 78123",
//     department: "Finance",
//     role: "Accountant",
//     photo: "https://i.pravatar.cc/150?img=11",
//     status: "Present",
//   },
//   {
//     id: 4,
//     name: "Emily Davis",
//     phone: "+91 96321 45678",
//     department: "Marketing",
//     role: "Marketing Manager",
//     photo: "https://i.pravatar.cc/150?img=32",
//     status: "On Leave",
//   },
//   {
//     id: 5,
//     name: "James Wilson",
//     phone: "+91 98951 23456",
//     department: "Sales",
//     role: "Sales Executive",
//     photo: "https://i.pravatar.cc/150?img=13",
//     status: "Present",
//   },
//   {
//     id: 6,
//     name: "Olivia Martin",
//     phone: "+91 95678 12345",
//     department: "Administration",
//     role: "Office Administrator",
//     photo: "https://i.pravatar.cc/150?img=44",
//     status: "Present",
//   },
//   {
//     id: 7,
//     name: "Daniel Thomas",
//     phone: "+91 94962 34567",
//     department: "Information Technology",
//     role: "Software Engineer",
//     photo: "https://i.pravatar.cc/150?img=68",
//     status: "Present",
//   },
//   {
//     id: 8,
//     name: "Sophia Taylor",
//     phone: "+91 94471 87654",
//     department: "Finance",
//     role: "Financial Analyst",
//     photo: "https://i.pravatar.cc/150?img=48",
//     status: "Absent",
//   },
// ];

//   // Automatic scrolling
//   useEffect(() => {
//     const container = employeeScrollRef.current;

//     if (!container) return;

//     const interval = setInterval(() => {
//       const maxScroll =
//         container.scrollWidth - container.clientWidth;

//       if (container.scrollLeft >= maxScroll - 10) {
//         container.scrollTo({
//           left: 0,
//           behavior: "smooth",
//         });
//       } else {
//         container.scrollBy({
//           left: 360,
//           behavior: "smooth",
//         });
//       }
//     }, 3500);

//     return () => clearInterval(interval);
//   }, []);

//   const scrollEmployees = (direction) => {
//     if (!employeeScrollRef.current) return;

//     employeeScrollRef.current.scrollBy({
//       left: direction === "left" ? -380 : 380,
//       behavior: "smooth",
//     });
//   };


//   // =========================================================
//   // DATA
//   // =========================================================

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
//     {
//       month: "Jan",
//       present: 218,
//       absent: 18,
//     },
//     {
//       month: "Feb",
//       present: 225,
//       absent: 14,
//     },
//     {
//       month: "Mar",
//       present: 220,
//       absent: 20,
//     },
//     {
//       month: "Apr",
//       present: 233,
//       absent: 11,
//     },
//     {
//       month: "May",
//       present: 227,
//       absent: 16,
//     },
//     {
//       month: "Jun",
//       present: 236,
//       absent: 9,
//     },
//     {
//       month: "Jul",
//       present: 231,
//       absent: 10,
//     },
//     {
//       month: "Aug",
//       present: 239,
//       absent: 8,
//     },
//     {
//       month: "Sep",
//       present: 231,
//       absent: 10,
//     },
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
//       icon: <CalendarCheck size={17} />,
//       type: "warning",
//     },
//     {
//       title: "Attendance alert",
//       description: "8 employees arrived late today",
//       time: "20 min ago",
//       icon: <Clock3 size={17} />,
//       type: "danger",
//     },
//     {
//       title: "Payroll",
//       description: "Payroll processing completed",
//       time: "1 hr ago",
//       icon: <WalletCards size={17} />,
//       type: "success",
//     },
//   ];

//   const quickActions = [
//     {
//       title: "Add Employee",
//       description: "Create employee profile",
//       icon: <UserPlus size={21} />,
//     },
//     {
//       title: "Leave Requests",
//       description: "Review pending leaves",
//       icon: <CalendarCheck size={21} />,
//     },
//     {
//       title: "Payroll",
//       description: "Manage salaries",
//       icon: <WalletCards size={21} />,
//     },
//     {
//       title: "Recruitment",
//       description: "Manage candidates",
//       icon: <BriefcaseBusiness size={21} />,
//     },
//   ];


//   // =========================================================
//   // CHAT
//   // =========================================================

//   const handleSendMessage = () => {
//     if (!message.trim()) return;

//     alert(`You asked AI HR: ${message}`);

//     setMessage("");
//   };


//   // =========================================================
//   // HELPERS
//   // =========================================================

//   const getActivityStyle = (type) => {
//     const styles = {
//       success: "bg-emerald-50 text-emerald-600",
//       warning: "bg-amber-50 text-amber-600",
//       info: "bg-blue-50 text-blue-600",
//       purple: "bg-violet-50 text-violet-600",
//     };

//     return styles[type] || styles.info;
//   };

//   const getNotificationStyle = (type) => {
//     const styles = {
//       warning: "bg-amber-50 text-amber-600",
//       danger: "bg-rose-50 text-rose-600",
//       success: "bg-emerald-50 text-emerald-600",
//     };

//     return styles[type] || styles.success;
//   };


//   // =========================================================
//   // RENDER
//   // =========================================================

//   return (
//     <div className="min-h-screen space-y-6 bg-slate-50/60 pb-10">


//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-7">

//         <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

//           <div>

//             <div className="mb-3 flex items-center gap-2">

//               <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
//                 <Sparkles size={16} />
//               </span>

//               <span className="text-sm font-semibold text-indigo-600">
//                 Admin Overview
//               </span>

//             </div>

//             <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
//               Good evening, Said 👋
//             </h1>

//             <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
//               Here's what's happening across your organization today.
//               Keep an eye on attendance, people, payroll and HR activity.
//             </p>

//           </div>


//           <div className="flex items-center gap-3">

//             <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100">
//               <CalendarDays size={17} />
//               Sep 29, 2026
//             </button>

//             <button className="relative rounded-xl border border-slate-200 bg-white p-3 text-slate-500 shadow-sm transition hover:bg-slate-50">

//               <Bell size={19} />

//               <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />

//             </button>

//           </div>

//         </div>

//       </section>


//       {/* =====================================================
//           SEARCH
//       ===================================================== */}

//       <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50">

//         <Search
//           size={19}
//           className="text-slate-400"
//         />

//         <input
//           type="text"
//           placeholder="Search employees, departments, payroll..."
//           className="ml-3 w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
//         />

//         <span className="hidden rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-400 md:block">
//           Ctrl + K
//         </span>

//       </div>


//       {/* =====================================================
//           KPI CARDS
//       ===================================================== */}

//       <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">


//         {/* TOTAL EMPLOYEES */}

//         <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

//           <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-indigo-50 transition group-hover:scale-125" />

//           <div className="relative">

//             <div className="flex items-start justify-between">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                 <Users size={22} />
//               </div>

//               <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
//                 <MoreHorizontal size={19} />
//               </button>

//             </div>

//             <p className="mt-5 text-sm font-medium text-slate-500">
//               Total Employees
//             </p>

//             <div className="mt-1 flex items-end justify-between">

//               <h2 className="text-3xl font-bold tracking-tight text-slate-900">
//                 248
//               </h2>

//               <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
//                 <ArrowUpRight size={13} />
//                 8.2%
//               </div>

//             </div>

//             <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
//               <TrendingUp
//                 size={14}
//                 className="text-emerald-500"
//               />
//               Compared with last month
//             </div>

//           </div>

//         </div>


//         {/* PRESENT */}

//         <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

//           <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-emerald-50 transition group-hover:scale-125" />

//           <div className="relative">

//             <div className="flex items-start justify-between">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
//                 <UserCheck size={22} />
//               </div>

//               <div className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-600">
//                 Live
//               </div>

//             </div>

//             <p className="mt-5 text-sm font-medium text-slate-500">
//               Present Today
//             </p>

//             <div className="mt-1 flex items-end justify-between">

//               <h2 className="text-3xl font-bold tracking-tight text-slate-900">
//                 231
//               </h2>

//               <div className="flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-600">
//                 <ArrowUpRight size={13} />
//                 3.4%
//               </div>

//             </div>

//             <div className="mt-4 flex items-center justify-between text-xs">

//               <span className="text-slate-400">
//                 Attendance rate
//               </span>

//               <span className="font-semibold text-emerald-600">
//                 93.1%
//               </span>

//             </div>

//             <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

//               <div className="h-full w-[93%] rounded-full bg-emerald-500" />

//             </div>

//           </div>

//         </div>


//         {/* ON LEAVE */}

//         <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

//           <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-amber-50 transition group-hover:scale-125" />

//           <div className="relative">

//             <div className="flex items-start justify-between">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
//                 <CalendarDays size={22} />
//               </div>

//               <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
//                 <MoreHorizontal size={19} />
//               </button>

//             </div>

//             <p className="mt-5 text-sm font-medium text-slate-500">
//               On Leave
//             </p>

//             <div className="mt-1 flex items-end justify-between">

//               <h2 className="text-3xl font-bold tracking-tight text-slate-900">
//                 12
//               </h2>

//               <div className="flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-500">
//                 <ArrowDownRight size={13} />
//                 1.2%
//               </div>

//             </div>

//             <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

//               <AlertCircle
//                 size={14}
//                 className="text-amber-500"
//               />

//               5 requests pending

//             </div>

//           </div>

//         </div>


//         {/* ABSENT */}

//         <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

//           <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-rose-50 transition group-hover:scale-125" />

//           <div className="relative">

//             <div className="flex items-start justify-between">

//               <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
//                 <UserX size={22} />
//               </div>

//               <button className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100">
//                 <MoreHorizontal size={19} />
//               </button>

//             </div>

//             <p className="mt-5 text-sm font-medium text-slate-500">
//               Absent Today
//             </p>

//             <div className="mt-1 flex items-end justify-between">

//               <h2 className="text-3xl font-bold tracking-tight text-slate-900">
//                 10
//               </h2>

//               <div className="flex items-center gap-1 rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-500">
//                 <ArrowDownRight size={13} />
//                 2.1%
//               </div>

//             </div>

//             <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

//               <Timer
//                 size={14}
//                 className="text-rose-500"
//               />

//               4.0% of total workforce

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           EMPLOYEE CAROUSEL
//       ===================================================== */}

//       <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">

//         {/* HEADER */}

//         <div className="mb-5 flex items-center justify-between">

//           <div>

//             <div className="flex items-center gap-2">

//               <h2 className="text-lg font-bold text-slate-900">
//                 Employees
//               </h2>

//               <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-bold text-indigo-600">
//                 248 TOTAL
//               </span>

//             </div>

//             <p className="mt-1 text-sm text-slate-400">
//               Recently active employees
//             </p>

//           </div>


//           <div className="flex items-center gap-2">

//             <button
//               onClick={() => scrollEmployees("left")}
//               className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//             >
//               <ChevronLeft size={18} />
//             </button>

//             <button
//               onClick={() => scrollEmployees("right")}
//               className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
//             >
//               <ChevronRight size={18} />
//             </button>

//           </div>

//         </div>


//         {/* CAROUSEL */}

//         <div
//           ref={employeeScrollRef}
//           className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:thin]"
//         >

//           {employees.map((employee) => (

//             <div
//               key={employee.id}
//               className="group min-w-[calc((100%-32px)/3)] snap-start rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:bg-white hover:shadow-md"
//               style={{
//                 minWidth: "calc((100% - 32px) / 3)",
//               }}
//             >

//               {/* CARD TOP */}

//               <div className="flex items-start justify-between">

//                 <div className="flex items-center gap-3">

//                   <div className="relative">

//                    <img
//     src={employee.photo}
//     alt={employee.name}
//     className="h-14 w-14 rounded-2xl object-cover shadow-sm ring-2 ring-white"
//   />

//   <span
//     className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${
//       employee.status === "Present"
//         ? "bg-emerald-500"
//         : employee.status === "On Leave"
//         ? "bg-amber-500"
//         : "bg-rose-500"
//     }`}
//   />


//                     <span
//                       className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${
//                         employee.status === "Present"
//                           ? "bg-emerald-500"
//                           : employee.status === "On Leave"
//                           ? "bg-amber-500"
//                           : "bg-rose-500"
//                       }`}
//                     />

//                   </div>

//                   <div className="min-w-0">

//                     <p className="truncate text-sm font-bold text-slate-800">
//                       {employee.name}
//                     </p>

//                     <p className="mt-0.5 truncate text-xs text-slate-400">
//                       {employee.role}
//                     </p>

//                   </div>

//                 </div>

//                 <button className="rounded-lg p-1.5 text-slate-300 transition hover:bg-slate-100 hover:text-slate-600">
//                   <MoreHorizontal size={17} />
//                 </button>

//               </div>


//               {/* CARD DETAILS */}

//               <div className="mt-4 space-y-2.5">

//                 <div className="flex items-center gap-2 text-xs text-slate-500">

//                   <Phone
//                     size={14}
//                     className="shrink-0 text-slate-400"
//                   />

//                   <span className="truncate">
//                     {employee.phone}
//                   </span>

//                 </div>

//                 <div className="flex items-center gap-2 text-xs text-slate-500">

//                   <Building2
//                     size={14}
//                     className="shrink-0 text-slate-400"
//                   />

//                   <span className="truncate">
//                     {employee.department}
//                   </span>

//                 </div>

//               </div>


//               {/* CARD FOOTER */}

//               <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-3">

//                 <span
//                   className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
//                     employee.status === "Present"
//                       ? "bg-emerald-50 text-emerald-600"
//                       : employee.status === "On Leave"
//                       ? "bg-amber-50 text-amber-600"
//                       : "bg-rose-50 text-rose-600"
//                   }`}
//                 >
//                   {employee.status}
//                 </span>

//                 <button className="flex items-center gap-1 text-[11px] font-semibold text-indigo-600 opacity-0 transition group-hover:opacity-100">
//                   View
//                   <ArrowRight size={12} />
//                 </button>

//               </div>

//             </div>

//           ))}

//         </div>


//         <div className="mt-2 flex items-center justify-center gap-2 text-[10px] text-slate-400">

//           <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

//           Auto scrolling

//           <span>•</span>

//           Scroll to explore

//         </div>

//       </section>


//       {/* =====================================================
//           TODAY OVERVIEW
//       ===================================================== */}

//       <div className="grid gap-5 md:grid-cols-3">

//         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
//               <Clock3 size={19} />
//             </div>

//             <div>

//               <p className="text-xs font-medium text-slate-400">
//                 Average Check-in
//               </p>

//               <p className="mt-1 text-lg font-bold text-slate-900">
//                 09:12 AM
//               </p>

//             </div>

//           </div>

//         </div>


//         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
//               <CircleDollarSign size={19} />
//             </div>

//             <div>

//               <p className="text-xs font-medium text-slate-400">
//                 Payroll Status
//               </p>

//               <p className="mt-1 text-lg font-bold text-slate-900">
//                 Processed
//               </p>

//             </div>

//             <CheckCircle2
//               size={18}
//               className="ml-auto text-emerald-500"
//             />

//           </div>

//         </div>


//         <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

//           <div className="flex items-center gap-3">

//             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
//               <CalendarCheck size={19} />
//             </div>

//             <div>

//               <p className="text-xs font-medium text-slate-400">
//                 Pending Approvals
//               </p>

//               <p className="mt-1 text-lg font-bold text-slate-900">
//                 17 Requests
//               </p>

//             </div>

//             <ArrowRight
//               size={18}
//               className="ml-auto text-slate-400"
//             />

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           ATTENDANCE + TREND
//       ===================================================== */}

//       <div className="grid gap-6 xl:grid-cols-3">


//         {/* ATTENDANCE */}

//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div className="flex items-start justify-between">

//             <div>

//               <div className="flex items-center gap-2">

//                 <h2 className="text-lg font-bold text-slate-900">
//                   Today's Attendance
//                 </h2>

//                 <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
//                   LIVE
//                 </span>

//               </div>

//               <p className="mt-1 text-sm text-slate-400">
//                 Workforce attendance summary
//               </p>

//             </div>

//             <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-50">
//               <MoreHorizontal size={20} />
//             </button>

//           </div>


//           <div className="relative mt-3 h-64">

//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >

//               <PieChart>

//                 <Pie
//                   data={attendanceData}
//                   cx="50%"
//                   cy="48%"
//                   innerRadius={72}
//                   outerRadius={96}
//                   paddingAngle={4}
//                   dataKey="value"
//                   stroke="none"
//                 >

//                   <Cell fill="#4f46e5" />
//                   <Cell fill="#f43f5e" />
//                   <Cell fill="#f59e0b" />

//                 </Pie>

//                 <Tooltip />

//                 <Legend
//                   verticalAlign="bottom"
//                   height={35}
//                   iconType="circle"
//                 />

//               </PieChart>

//             </ResponsiveContainer>


//             <div className="pointer-events-none absolute inset-0 flex items-center justify-center pb-8">

//               <div className="text-center">

//                 <p className="text-3xl font-bold text-slate-900">
//                   93.1%
//                 </p>

//                 <p className="mt-1 text-xs text-slate-400">
//                   Attendance
//                 </p>

//               </div>

//             </div>

//           </div>


//           <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">

//             <div className="text-center">
//               <p className="text-lg font-bold text-indigo-600">
//                 231
//               </p>
//               <p className="text-[11px] text-slate-400">
//                 Present
//               </p>
//             </div>

//             <div className="text-center">
//               <p className="text-lg font-bold text-rose-500">
//                 10
//               </p>
//               <p className="text-[11px] text-slate-400">
//                 Absent
//               </p>
//             </div>

//             <div className="text-center">
//               <p className="text-lg font-bold text-amber-500">
//                 12
//               </p>
//               <p className="text-[11px] text-slate-400">
//                 Leave
//               </p>
//             </div>

//           </div>

//         </div>


//         {/* ATTENDANCE TREND */}

//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">

//           <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

//             <div>

//               <div className="flex items-center gap-2">

//                 <h2 className="text-lg font-bold text-slate-900">
//                   Attendance Trends
//                 </h2>

//                 <TrendingUp
//                   size={17}
//                   className="text-emerald-500"
//                 />

//               </div>

//               <p className="mt-1 text-sm text-slate-400">
//                 Monthly attendance performance
//               </p>

//             </div>

//             <button className="w-fit rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100">
//               This Year
//             </button>

//           </div>


//           <div className="mt-5 h-72">

//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >

//               <AreaChart data={monthlyAttendance}>

//                 <defs>

//                   <linearGradient
//                     id="attendanceGradient"
//                     x1="0"
//                     y1="0"
//                     x2="0"
//                     y2="1"
//                   >

//                     <stop
//                       offset="0%"
//                       stopColor="#4f46e5"
//                       stopOpacity={0.25}
//                     />

//                     <stop
//                       offset="100%"
//                       stopColor="#4f46e5"
//                       stopOpacity={0}
//                     />

//                   </linearGradient>

//                 </defs>


//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   vertical={false}
//                   stroke="#eef2f7"
//                 />

//                 <XAxis
//                   dataKey="month"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{
//                     fontSize: 12,
//                     fill: "#94a3b8",
//                   }}
//                 />

//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{
//                     fontSize: 12,
//                     fill: "#94a3b8",
//                   }}
//                 />

//                 <Tooltip />

//                 <Area
//                   type="monotone"
//                   dataKey="present"
//                   stroke="#4f46e5"
//                   strokeWidth={3}
//                   fill="url(#attendanceGradient)"
//                 />

//                 <Area
//                   type="monotone"
//                   dataKey="absent"
//                   stroke="#fb7185"
//                   strokeWidth={2}
//                   fill="transparent"
//                 />

//               </AreaChart>

//             </ResponsiveContainer>

//           </div>


//           <div className="flex items-center gap-6 border-t border-slate-100 pt-4 text-xs">

//             <div className="flex items-center gap-2">

//               <span className="h-2.5 w-2.5 rounded-full bg-indigo-600" />

//               <span className="text-slate-500">
//                 Present
//               </span>

//             </div>

//             <div className="flex items-center gap-2">

//               <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />

//               <span className="text-slate-500">
//                 Absent
//               </span>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           DEPARTMENT + NOTIFICATIONS
//       ===================================================== */}

//       <div className="grid gap-6 xl:grid-cols-3">


//         {/* DEPARTMENT */}

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


//           <div className="mt-5 h-72">

//             <ResponsiveContainer
//               width="100%"
//               height="100%"
//             >

//               <BarChart
//                 data={departmentData}
//                 layout="vertical"
//                 margin={{
//                   left: 10,
//                   right: 20,
//                   top: 5,
//                   bottom: 5,
//                 }}
//               >

//                 <CartesianGrid
//                   strokeDasharray="3 3"
//                   horizontal={false}
//                   stroke="#eef2f7"
//                 />

//                 <XAxis
//                   type="number"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{
//                     fontSize: 11,
//                     fill: "#94a3b8",
//                   }}
//                 />

//                 <YAxis
//                   type="category"
//                   dataKey="name"
//                   axisLine={false}
//                   tickLine={false}
//                   width={75}
//                   tick={{
//                     fontSize: 12,
//                     fill: "#64748b",
//                   }}
//                 />

//                 <Tooltip />

//                 <Bar
//                   dataKey="employees"
//                   fill="#6366f1"
//                   radius={[0, 8, 8, 0]}
//                   barSize={22}
//                 />

//               </BarChart>

//             </ResponsiveContainer>

//           </div>

//         </div>


//         {/* NOTIFICATIONS */}

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


//           <div className="mt-5 space-y-3">

//             {notifications.map((item, index) => (

//               <div
//                 key={index}
//                 className="group flex gap-3 rounded-xl border border-transparent bg-slate-50 p-3 transition hover:border-slate-200 hover:bg-white hover:shadow-sm"
//               >

//                 <div
//                   className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getNotificationStyle(
//                     item.type
//                   )}`}
//                 >
//                   {item.icon}
//                 </div>

//                 <div className="min-w-0 flex-1">

//                   <div className="flex items-start justify-between gap-2">

//                     <p className="text-sm font-semibold text-slate-800">
//                       {item.title}
//                     </p>

//                     <span className="h-2 w-2 shrink-0 rounded-full bg-indigo-500" />

//                   </div>

//                   <p className="mt-1 text-xs leading-5 text-slate-500">
//                     {item.description}
//                   </p>

//                   <p className="mt-1 text-[11px] text-slate-400">
//                     {item.time}
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>


//           <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
//             See all notifications
//             <ChevronRight size={16} />
//           </button>

//         </div>

//       </div>


//       {/* =====================================================
//           ACTIVITY + QUICK ACTIONS
//       ===================================================== */}

//       <div className="grid gap-6 lg:grid-cols-2">


//         {/* ACTIVITY */}

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


//           <div className="relative mt-7 space-y-6">

//             <div className="absolute bottom-3 left-5 top-3 w-px bg-slate-100" />

//             {activities.map((activity, index) => (

//               <div
//                 key={index}
//                 className="relative flex items-center gap-4"
//               >

//                 <div
//                   className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getActivityStyle(
//                     activity.type
//                   )}`}
//                 >
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

//                 <ChevronRight
//                   size={16}
//                   className="text-slate-300"
//                 />

//               </div>

//             ))}

//           </div>

//         </div>


//         {/* QUICK ACTIONS */}

//         <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

//           <div>

//             <h2 className="text-lg font-bold text-slate-900">
//               Quick Actions
//             </h2>

//             <p className="mt-1 text-sm text-slate-400">
//               Frequently used HR actions
//             </p>

//           </div>


//           <div className="mt-6 grid grid-cols-2 gap-3">

//             {quickActions.map((action, index) => (

//               <button
//                 key={index}
//                 className="group rounded-2xl border border-slate-200 bg-white p-4 text-left transition duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-sm"
//               >

//                 <div className="flex items-center justify-between">

//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                     {action.icon}
//                   </div>

//                   <ArrowUpRight
//                     size={16}
//                     className="text-slate-300 transition group-hover:text-indigo-500"
//                   />

//                 </div>

//                 <p className="mt-4 text-sm font-semibold text-slate-800">
//                   {action.title}
//                 </p>

//                 <p className="mt-1 text-xs text-slate-400">
//                   {action.description}
//                 </p>

//               </button>

//             ))}

//           </div>

//         </div>

//       </div>


//       {/* =====================================================
//           AI ASSISTANT
//       ===================================================== */}

//       <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6">

//         <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">

//           <div className="flex items-center gap-4">

//             <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
//               <Bot size={24} />
//             </div>

//             <div>

//               <div className="flex items-center gap-2">

//                 <h3 className="font-bold text-slate-900">
//                   AI HR Assistant
//                 </h3>

//                 <span className="rounded-full bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-600">
//                   ONLINE
//                 </span>

//               </div>

//               <p className="mt-1 text-sm text-slate-500">
//                 Ask about attendance, employees, payroll or leave requests.
//               </p>

//             </div>

//           </div>


//           <button
//             onClick={() => setChatOpen(true)}
//             className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700"
//           >
//             <MessageCircle size={17} />
//             Open Assistant
//           </button>

//         </div>

//       </div>


//       {/* =====================================================
//           FLOATING AI BUTTON
//       ===================================================== */}

//       <button
//         onClick={() => setChatOpen(true)}
//         className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl shadow-indigo-200 transition duration-300 hover:scale-110 hover:bg-indigo-700"
//       >
//         <MessageCircle size={24} />
//       </button>


//       {/* =====================================================
//           AI CHAT
//       ===================================================== */}

//       {chatOpen && (

//         <div className="fixed bottom-24 right-6 z-50 flex w-[370px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">


//           {/* CHAT HEADER */}

//           <div className="border-b border-slate-100 bg-white px-5 py-4">

//             <div className="flex items-center justify-between">

//               <div className="flex items-center gap-3">

//                 <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                   <Bot size={21} />
//                 </div>

//                 <div>

//                   <p className="font-semibold text-slate-900">
//                     AI HR Assistant
//                   </p>

//                   <div className="mt-0.5 flex items-center gap-1.5">

//                     <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

//                     <p className="text-xs text-slate-400">
//                       Online & ready
//                     </p>

//                   </div>

//                 </div>

//               </div>

//               <button
//                 onClick={() => setChatOpen(false)}
//                 className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
//               >
//                 <X size={18} />
//               </button>

//             </div>

//           </div>


//           {/* MESSAGES */}

//           <div className="h-80 space-y-4 overflow-y-auto bg-slate-50 p-4">

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


//             <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-none bg-indigo-600 p-3 text-white shadow-sm">

//               <p className="text-sm">
//                 Show me today's attendance.
//               </p>

//             </div>


//             <div className="flex gap-2">

//               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//                 <Bot size={15} />
//               </div>

//               <div className="max-w-[80%] rounded-2xl rounded-tl-none bg-white p-3 shadow-sm">

//                 <p className="text-sm leading-5 text-slate-600">
//                   231 employees are present today.
//                   That's a 93.1% attendance rate. 👍
//                 </p>

//               </div>

//             </div>

//           </div>


//           {/* INPUT */}

//           <div className="border-t border-slate-100 bg-white p-3">

//             <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-2 transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50">

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
//                 className="flex-1 bg-transparent px-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
//               />

//               <button
//                 onClick={handleSendMessage}
//                 className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700"
//               >
//                 <Send size={16} />
//               </button>

//             </div>

//             <p className="mt-2 text-center text-[10px] text-slate-400">
//               AI HR can help you navigate your HR data
//             </p>

//           </div>

//         </div>

//       )}

//     </div>
//   );
// }

// export default AdminDashBoard;


import React, { useEffect, useRef, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Bell,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Command,
  FileCheck2,
  Filter,
  Headphones,
  MessageCircle,
  MoreHorizontal,
  Phone,
  RefreshCw,
  Search,
  Send,
  Sparkles,
  UserCheck,
  UserRound,
  Users,
  UsersRound,
  X,
  Zap,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const employees = [
  {
    id: 1,
    name: "Arjun Menon",
    phone: "+91 98765 43210",
    department: "Engineering",
    role: "Senior Developer",
    photo: "https://i.pravatar.cc/300?img=11",
    status: "Present",
  },
  {
    id: 2,
    name: "Ananya Krishnan",
    phone: "+91 98470 22145",
    department: "Human Resources",
    role: "HR Executive",
    photo: "https://i.pravatar.cc/300?img=47",
    status: "Present",
  },
  {
    id: 3,
    name: "Rahul Nair",
    phone: "+91 98950 76123",
    department: "Finance",
    role: "Finance Analyst",
    photo: "https://i.pravatar.cc/300?img=12",
    status: "Present",
  },
  {
    id: 4,
    name: "Meera Joseph",
    phone: "+91 97460 34567",
    department: "Marketing",
    role: "Marketing Manager",
    photo: "https://i.pravatar.cc/300?img=44",
    status: "On Leave",
  },
  {
    id: 5,
    name: "Vishnu Prasad",
    phone: "+91 96050 82341",
    department: "Sales",
    role: "Sales Executive",
    photo: "https://i.pravatar.cc/300?img=13",
    status: "Present",
  },
  {
    id: 6,
    name: "Fathima Rahman",
    phone: "+91 95620 11234",
    department: "Administration",
    role: "Admin Officer",
    photo: "https://i.pravatar.cc/300?img=32",
    status: "Present",
  },
  {
    id: 7,
    name: "Adithya Kumar",
    phone: "+91 95260 99887",
    department: "Engineering",
    role: "Software Engineer",
    photo: "https://i.pravatar.cc/300?img=14",
    status: "Late",
  },
  {
    id: 8,
    name: "Nimisha S",
    phone: "+91 94970 44556",
    department: "Human Resources",
    role: "HR Coordinator",
    photo: "https://i.pravatar.cc/300?img=48",
    status: "Present",
  },
];

const attendanceData = [
  { name: "Present", value: 231 },
  { name: "Absent", value: 10 },
  { name: "On Leave", value: 12 },
];

const attendanceTrend = [
  { month: "Jan", present: 210, absent: 18 },
  { month: "Feb", present: 218, absent: 15 },
  { month: "Mar", present: 221, absent: 14 },
  { month: "Apr", present: 224, absent: 13 },
  { month: "May", present: 226, absent: 12 },
  { month: "Jun", present: 229, absent: 11 },
  { month: "Jul", present: 225, absent: 14 },
  { month: "Aug", present: 232, absent: 9 },
  { month: "Sep", present: 231, absent: 10 },
];

const departmentData = [
  { department: "IT", employees: 82 },
  { department: "HR", employees: 28 },
  { department: "Finance", employees: 34 },
  { department: "Sales", employees: 46 },
  { department: "Marketing", employees: 31 },
  { department: "Admin", employees: 27 },
];

const activities = [
  {
    title: "New employee added",
    description: "Nimisha S joined Human Resources",
    time: "10 min ago",
    icon: UserCheck,
  },
  {
    title: "Leave approved",
    description: "Annual leave approved for Arjun Menon",
    time: "32 min ago",
    icon: Check,
  },
  {
    title: "Payroll processed",
    description: "September payroll has been completed",
    time: "1 hour ago",
    icon: BriefcaseBusiness,
  },
  {
    title: "Attendance updated",
    description: "Daily attendance was synchronized",
    time: "2 hours ago",
    icon: RefreshCw,
  },
];

const notifications = [
  {
    title: "5 leave requests",
    description: "Waiting for your approval",
    type: "warning",
  },
  {
    title: "Payroll completed",
    description: "September payroll is ready",
    type: "success",
  },
  {
    title: "3 late arrivals",
    description: "Attendance needs attention",
    type: "info",
  },
];

/* -------------------------------------------------------------------------- */
/* SMALL COMPONENTS                                                           */
/* -------------------------------------------------------------------------- */

function StatusBadge({ status }) {
  const styles = {
    Present: "bg-emerald-50 text-emerald-700 border-emerald-100",
    "On Leave": "bg-amber-50 text-amber-700 border-amber-100",
    Late: "bg-orange-50 text-orange-700 border-orange-100",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
        styles[status] || "bg-slate-50 text-slate-600 border-slate-100"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          status === "Present"
            ? "bg-emerald-500"
            : status === "Late"
              ? "bg-orange-500"
              : "bg-amber-500"
        }`}
      />
      {status}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  icon: Icon,
}) {
  return (
    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <div className="mb-1.5 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
            {Icon && <Icon size={13} />}
            {eyebrow}
          </div>
        )}

        <h2 className="text-lg font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      {action}
    </div>
  );
}

function StatCard({
  title,
  value,
  subtitle,
  trend,
  trendType = "up",
  icon: Icon,
  iconBg,
  iconColor,
  miniBars = [],
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-slate-50 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg}`}
        >
          <Icon size={21} className={iconColor} strokeWidth={2} />
        </div>

        {trend && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold ${
              trendType === "down"
                ? "bg-rose-50 text-rose-600"
                : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {trendType === "down" ? (
              <ArrowDownRight size={12} />
            ) : (
              <ArrowUpRight size={12} />
            )}
            {trend}
          </span>
        )}
      </div>

      <div className="relative mt-5">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div className="mt-1 flex items-end gap-2">
          <h3 className="text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h3>
        </div>
        <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
      </div>

      {miniBars.length > 0 && (
        <div className="mt-4 flex h-7 items-end gap-1.5">
          {miniBars.map((height, index) => (
            <div
              key={index}
              className="flex-1 rounded-sm bg-indigo-100 transition-all duration-300 group-hover:bg-indigo-200"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CustomChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl">
      <p className="mb-2 text-xs font-semibold text-slate-500">{label}</p>

      {payload.map((item) => (
        <div key={item.dataKey} className="flex items-center gap-2 text-xs">
          <span
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-slate-500">{item.name}:</span>
          <span className="font-bold text-slate-900">{item.value}</span>
        </div>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* MAIN COMPONENT                                                             */
/* -------------------------------------------------------------------------- */

function AdminDashBoard() {
  const employeeScrollRef = useRef(null);

  const [isEmployeeHovered, setIsEmployeeHovered] = useState(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [assistantInput, setAssistantInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      text: "Hi Said! 👋 I’m your AI HR Assistant. I can help you with attendance, leave requests, payroll and employee information.",
    },
  ]);

  /* ---------------------------------------------------------------------- */
  /* EMPLOYEE CAROUSEL AUTO SCROLL                                          */
  /* ---------------------------------------------------------------------- */

  useEffect(() => {
    if (isEmployeeHovered) return;

    const interval = setInterval(() => {
      const container = employeeScrollRef.current;

      if (!container) return;

      const maxScroll =
        container.scrollWidth - container.clientWidth;

      if (container.scrollLeft >= maxScroll - 20) {
        container.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        container.scrollBy({
          left: container.clientWidth * 0.92,
          behavior: "smooth",
        });
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isEmployeeHovered]);

  const scrollEmployees = (direction) => {
    const container = employeeScrollRef.current;

    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -container.clientWidth * 0.9 : container.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  /* ---------------------------------------------------------------------- */
  /* AI ASSISTANT                                                           */
  /* ---------------------------------------------------------------------- */

  const getAssistantResponse = (message) => {
    const lower = message.toLowerCase();

    if (lower.includes("attendance")) {
      return "Today's attendance is 93.1%. There are 231 employees present, 10 absent and 12 employees on leave.";
    }

    if (lower.includes("leave")) {
      return "There are currently 5 leave requests waiting for approval.";
    }

    if (lower.includes("payroll")) {
      return "September payroll has been processed successfully.";
    }

    if (lower.includes("employee")) {
      return "There are currently 248 employees registered in the HRMS.";
    }

    return "I can help you with attendance, employees, leave requests and payroll. Try asking about one of those.";
  };

  const handleSendMessage = (text = assistantInput) => {
    const message = text.trim();

    if (!message) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);
    setAssistantInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: getAssistantResponse(message),
        },
      ]);
    }, 500);
  };

  const quickPrompts = [
    "Today's attendance",
    "Pending leaves",
    "Payroll status",
  ];

  return (
    <div className="min-h-full bg-slate-50/70 pb-10">
      {/* ------------------------------------------------------------------ */}
      {/* TOP HEADER                                                         */}
      {/* ------------------------------------------------------------------ */}

      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-300" />
                <span className="text-xs font-semibold text-emerald-600">
                  System operational
                </span>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                Good evening, Said
                <span className="ml-2">👋</span>
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Here&apos;s what&apos;s happening across your organization today.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:flex"
              >
                <CalendarDays size={16} />
                Oct 06, 2026
              </button>

              <button
                type="button"
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Bell size={18} />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full border-2 border-white bg-indigo-500" />
              </button>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition hover:bg-slate-800"
              >
                <Command size={17} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="space-y-7 px-4 pt-6 sm:px-6 lg:px-8">
        {/* ---------------------------------------------------------------- */}
        {/* SEARCH                                                           */}
        {/* ---------------------------------------------------------------- */}

        <div className="flex flex-col gap-3 md:flex-row">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search employees, departments, requests..."
              className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
            />

            <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-400 sm:flex">
              <Command size={11} />
              K
            </div>
          </div>

          <button
            type="button"
            className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            <Filter size={16} />
            Filters
          </button>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* KPI CARDS                                                        */}
        {/* ---------------------------------------------------------------- */}

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Employees"
            value="248"
            subtitle="Active employees"
            trend="+6.4%"
            icon={UsersRound}
            iconBg="bg-indigo-50"
            iconColor="text-indigo-600"
            miniBars={[35, 48, 42, 58, 52, 70, 65, 78]}
          />

          <StatCard
            title="Present Today"
            value="231"
            subtitle="93.1% attendance"
            trend="+2.1%"
            icon={UserCheck}
            iconBg="bg-emerald-50"
            iconColor="text-emerald-600"
            miniBars={[45, 52, 49, 63, 58, 72, 69, 82]}
          />

          <StatCard
            title="On Leave"
            value="12"
            subtitle="5 requests pending"
            trend="+1.8%"
            trendType="down"
            icon={CalendarDays}
            iconBg="bg-amber-50"
            iconColor="text-amber-600"
            miniBars={[72, 62, 67, 50, 56, 42, 48, 38]}
          />

          <StatCard
            title="Absent Today"
            value="10"
            subtitle="4.0% of workforce"
            trend="-12.5%"
            icon={Clock3}
            iconBg="bg-rose-50"
            iconColor="text-rose-600"
            miniBars={[82, 70, 74, 61, 56, 45, 38, 32]}
          />
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* EMPLOYEE SPOTLIGHT                                               */}
        {/* ---------------------------------------------------------------- */}

        <section className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
          <SectionHeader
            eyebrow="Live directory"
            title="Employee Spotlight"
            description="Quick access to your workforce directory."
            icon={Users}
            action={
              <div className="flex items-center gap-2">
                <span className="hidden rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 sm:inline-flex">
                  248 Employees
                </span>

                <button
                  type="button"
                  onClick={() => scrollEmployees("left")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Previous employees"
                >
                  <ChevronLeft size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => scrollEmployees("right")}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50"
                  aria-label="Next employees"
                >
                  <ChevronRight size={17} />
                </button>
              </div>
            }
          />

          <div
            ref={employeeScrollRef}
            onMouseEnter={() => setIsEmployeeHovered(true)}
            onMouseLeave={() => setIsEmployeeHovered(false)}
            onTouchStart={() => setIsEmployeeHovered(true)}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {employees.map((employee) => (
              <div
                key={employee.id}
                className="w-[86%] shrink-0 snap-start sm:w-[calc((100%-16px)/2)] lg:w-[calc((100%-32px)/3)]"
              >
                <div className="group relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md">
                  <div className="flex items-start justify-between">
                    <div className="relative">
                      <img
                        src={employee.photo}
                        alt={employee.name}
                        className="h-14 w-14 rounded-xl object-cover ring-2 ring-white"
                      />

                      <span
                        className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-[3px] border-white ${
                          employee.status === "Present"
                            ? "bg-emerald-500"
                            : employee.status === "Late"
                              ? "bg-orange-500"
                              : "bg-amber-500"
                        }`}
                      />
                    </div>

                    <button
                      type="button"
                      aria-label={`More options for ${employee.name}`}
                      className="rounded-lg p-1.5 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
                    >
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-bold text-slate-900">
                          {employee.name}
                        </h3>
                        <p className="mt-0.5 truncate text-xs text-slate-500">
                          {employee.role}
                        </p>
                      </div>

                      <StatusBadge status={employee.status} />
                    </div>

                    <div className="mt-4 space-y-2.5">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Phone size={13} className="text-slate-400" />
                        <span>{employee.phone}</span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <BriefcaseBusiness
                          size={13}
                          className="text-slate-400"
                        />
                        <span>{employee.department}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* TODAY OVERVIEW                                                   */}
        {/* ---------------------------------------------------------------- */}

        <section>
          <SectionHeader
            eyebrow="Daily pulse"
            title="Today at a glance"
            description="Key operational indicators for today."
            icon={Activity}
          />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Average check-in
                  </p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    09:12 AM
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <Clock3 size={19} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <ArrowUpRight size={14} />
                8 min earlier than yesterday
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Payroll status
                  </p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    Processed
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <FileCheck2 size={19} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <Check size={14} />
                September payroll completed
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Pending approvals
                  </p>
                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    17 Requests
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <Zap size={19} />
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-amber-600">
                <Activity size={14} />
                Requires your attention
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* ATTENDANCE ANALYTICS                                             */}
        {/* ---------------------------------------------------------------- */}

        <section>
          <SectionHeader
            eyebrow="Workforce analytics"
            title="Attendance analytics"
            description="Monitor workforce presence and attendance patterns."
            icon={Activity}
            action={
              <button
                type="button"
                className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 shadow-sm sm:flex"
              >
                <CalendarDays size={14} />
                Last 9 months
              </button>
            }
          />

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-[0.8fr_1.2fr]">
            {/* DONUT */}

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Today&apos;s attendance
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Current workforce status
                  </p>
                </div>

                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-600">
                  Live
                </span>
              </div>

              <div className="relative mt-4 h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={attendanceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={72}
                      outerRadius={100}
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
                      iconType="circle"
                      iconSize={7}
                      wrapperStyle={{
                        fontSize: "11px",
                        color: "#64748b",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-3xl font-bold tracking-tight text-slate-900">
                    93.1%
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-400">
                    Attendance
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900">231</p>
                  <p className="text-[11px] text-slate-400">Present</p>
                </div>

                <div className="border-x border-slate-100 text-center">
                  <p className="text-lg font-bold text-slate-900">10</p>
                  <p className="text-[11px] text-slate-400">Absent</p>
                </div>

                <div className="text-center">
                  <p className="text-lg font-bold text-slate-900">12</p>
                  <p className="text-[11px] text-slate-400">Leave</p>
                </div>
              </div>
            </div>

            {/* AREA CHART */}

            <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">
                    Attendance trend
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Present vs absent employees
                  </p>
                </div>

                <div className="hidden items-center gap-3 text-[11px] font-medium text-slate-500 sm:flex">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    Present
                  </span>

                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    Absent
                  </span>
                </div>
              </div>

              <div className="mt-5 h-[315px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={attendanceTrend}
                    margin={{
                      top: 10,
                      right: 5,
                      left: -25,
                      bottom: 0,
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="presentGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#4f46e5"
                          stopOpacity={0.22}
                        />
                        <stop
                          offset="100%"
                          stopColor="#4f46e5"
                          stopOpacity={0}
                        />
                      </linearGradient>

                      <linearGradient
                        id="absentGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#fb7185"
                          stopOpacity={0.18}
                        />
                        <stop
                          offset="100%"
                          stopColor="#fb7185"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e2e8f0"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 11,
                        fill: "#94a3b8",
                      }}
                    />

                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{
                        fontSize: 11,
                        fill: "#94a3b8",
                      }}
                    />

                    <Tooltip content={<CustomChartTooltip />} />

                    <Area
                      type="monotone"
                      dataKey="present"
                      name="Present"
                      stroke="#4f46e5"
                      strokeWidth={2.5}
                      fill="url(#presentGradient)"
                    />

                    <Area
                      type="monotone"
                      dataKey="absent"
                      name="Absent"
                      stroke="#fb7185"
                      strokeWidth={2}
                      fill="url(#absentGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* DEPARTMENT + NOTIFICATIONS                                       */}
        {/* ---------------------------------------------------------------- */}

        <section className="grid grid-cols-1 gap-5 xl:grid-cols-[1.4fr_0.6fr]">
          {/* Department */}

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              eyebrow="Workforce distribution"
              title="Employees by department"
              description="Current headcount across departments."
              icon={UsersRound}
            />

            <div className="h-[320px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={departmentData}
                  margin={{
                    top: 10,
                    right: 5,
                    left: -20,
                    bottom: 0,
                  }}
                  barSize={28}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#e2e8f0"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="department"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "#64748b",
                    }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "#94a3b8",
                    }}
                  />

                  <Tooltip
                    cursor={{ fill: "#f8fafc" }}
                    contentStyle={{
                      borderRadius: 12,
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
                      fontSize: 12,
                    }}
                  />

                  <Bar
                    dataKey="employees"
                    name="Employees"
                    fill="#6366f1"
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Notifications */}

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-indigo-500">
                  Attention center
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-900">
                  Notifications
                </h2>
              </div>

              <button
                type="button"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-50 hover:text-slate-600"
              >
                <MoreHorizontal size={18} />
              </button>
            </div>

            <div className="space-y-3">
              {notifications.map((notification, index) => {
                const typeStyle = {
                  warning: {
                    bg: "bg-amber-50",
                    dot: "bg-amber-500",
                  },
                  success: {
                    bg: "bg-emerald-50",
                    dot: "bg-emerald-500",
                  },
                  info: {
                    bg: "bg-indigo-50",
                    dot: "bg-indigo-500",
                  },
                };

                const style = typeStyle[notification.type];

                return (
                  <div
                    key={index}
                    className={`rounded-xl ${style.bg} p-4 transition hover:scale-[1.01]`}
                  >
                    <div className="flex gap-3">
                      <span
                        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${style.dot}`}
                      />

                      <div>
                        <p className="text-sm font-bold text-slate-800">
                          {notification.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-2.5 text-xs font-bold text-slate-600 transition hover:bg-slate-50"
            >
              View all notifications
              <ChevronRight size={14} />
            </button>
          </div>
        </section>

        {/* ---------------------------------------------------------------- */}
        {/* ACTIVITY + QUICK ACTIONS                                         */}
        {/* ---------------------------------------------------------------- */}

        <section className="grid grid-cols-1 gap-5 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Activity */}

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              eyebrow="Audit timeline"
              title="Recent activity"
              description="Latest actions across the HRMS."
              icon={Activity}
            />

            <div className="relative">
              <div className="absolute bottom-3 left-[17px] top-3 w-px bg-slate-200" />

              <div className="space-y-5">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;

                  return (
                    <div key={index} className="relative flex gap-4">
                      <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-white bg-indigo-50 text-indigo-600 shadow-sm">
                        <Icon size={14} />
                      </div>

                      <div className="flex min-w-0 flex-1 items-start justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/60 px-4 py-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-800">
                            {activity.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-500">
                            {activity.description}
                          </p>
                        </div>

                        <span className="shrink-0 text-[10px] font-medium text-slate-400">
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Actions */}

          <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm sm:p-6">
            <SectionHeader
              eyebrow="Shortcuts"
              title="Quick actions"
              description="Common HR operations."
              icon={Zap}
            />

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "Add employee",
                  icon: UserRound,
                },
                {
                  title: "Attendance",
                  icon: Clock3,
                },
                {
                  title: "Leave requests",
                  icon: CalendarDays,
                },
                {
                  title: "Payroll",
                  icon: BriefcaseBusiness,
                },
              ].map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.title}
                    type="button"
                    className="group flex min-h-[105px] flex-col items-start justify-between rounded-xl border border-slate-200 bg-white p-4 text-left transition-all hover:-translate-y-0.5 hover:border-indigo-200 hover:bg-indigo-50/40 hover:shadow-sm"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition group-hover:bg-indigo-100 group-hover:text-indigo-600">
                      <Icon size={17} />
                    </span>

                    <span className="text-xs font-bold text-slate-700">
                      {action.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* ------------------------------------------------------------------ */}
      {/* AI HR ASSISTANT                                                    */}
      {/* ------------------------------------------------------------------ */}

      <button
        type="button"
        onClick={() => setIsAssistantOpen((prev) => !prev)}
        aria-label="Open AI HR Assistant"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xl shadow-slate-900/20 transition-all hover:-translate-y-1 hover:bg-slate-800"
      >
        {isAssistantOpen ? <X size={21} /> : <Bot size={22} />}

        {!isAssistantOpen && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-indigo-500 px-1 text-[9px] font-bold text-white">
            AI
          </span>
        )}
      </button>

      {isAssistantOpen && (
        <div className="fixed bottom-24 right-4 z-40 flex w-[calc(100%-2rem)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15 sm:right-6">
          {/* Assistant Header */}

          <div className="border-b border-slate-100 bg-slate-900 px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Sparkles size={19} />
                </div>

                <div>
                  <p className="text-sm font-bold">AI HR Assistant</p>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-slate-300">
                      Ready to help
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsAssistantOpen(false)}
                className="rounded-lg p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <X size={17} />
              </button>
            </div>
          </div>

          {/* Messages */}

          <div className="max-h-[330px] min-h-[250px] space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-5 ${
                    message.role === "user"
                      ? "rounded-br-md bg-indigo-600 text-white"
                      : "rounded-bl-md border border-slate-200 bg-white text-slate-600 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Prompts */}

          <div className="border-t border-slate-100 bg-white px-4 pt-3">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSendMessage(prompt)}
                  className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[10px] font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}

          <div className="bg-white p-4 pt-2">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-1.5 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-500/10">
              <input
                value={assistantInput}
                onChange={(e) => setAssistantInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder="Ask your HR assistant..."
                className="min-w-0 flex-1 bg-transparent px-2 text-xs text-slate-800 outline-none placeholder:text-slate-400"
              />

              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={!assistantInput.trim()}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashBoard;