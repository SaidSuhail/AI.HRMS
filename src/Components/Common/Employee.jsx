import React, { useMemo, useState } from "react";
import {
  Search,
  Plus,
  Users,
  UserCheck,
  UserX,
  UserPlus,
  SlidersHorizontal,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Download,
  LayoutGrid,
  List,
} from "lucide-react";

function Employee() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");
  const [status, setStatus] = useState("All Status");
  const [viewMode, setViewMode] = useState("table");

  const employees = [
    {
      id: 1,
      employeeId: "EMP001",
      name: "Arjun Menon",
      email: "arjun.menon@aihrms.com",
      phone: "+91 98765 43210",
      department: "Engineering",
      designation: "Senior Software Engineer",
      location: "Kochi",
      joiningDate: "12 Jan 2023",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      employeeId: "EMP002",
      name: "Ananya Nair",
      email: "ananya.nair@aihrms.com",
      phone: "+91 98765 42120",
      department: "Human Resources",
      designation: "HR Manager",
      location: "Trivandrum",
      joiningDate: "08 Mar 2022",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 3,
      employeeId: "EMP003",
      name: "Rahul Krishnan",
      email: "rahul.krishnan@aihrms.com",
      phone: "+91 98470 12345",
      department: "Finance",
      designation: "Financial Analyst",
      location: "Kozhikode",
      joiningDate: "19 Jun 2024",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 4,
      employeeId: "EMP004",
      name: "Meera Thomas",
      email: "meera.thomas@aihrms.com",
      phone: "+91 97456 78321",
      department: "Marketing",
      designation: "Marketing Executive",
      location: "Kochi",
      joiningDate: "25 Aug 2024",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=44",
    },
    {
      id: 5,
      employeeId: "EMP005",
      name: "Vishnu Raj",
      email: "vishnu.raj@aihrms.com",
      phone: "+91 99612 45678",
      department: "Engineering",
      designation: "Full Stack Developer",
      location: "Bangalore",
      joiningDate: "03 Sep 2024",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 6,
      employeeId: "EMP006",
      name: "Fathima Shirin",
      email: "fathima.shirin@aihrms.com",
      phone: "+91 98950 33221",
      department: "Operations",
      designation: "Operations Executive",
      location: "Malappuram",
      joiningDate: "14 Nov 2023",
      status: "Inactive",
      image:
        "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 7,
      employeeId: "EMP007",
      name: "Adithya Suresh",
      email: "adithya.suresh@aihrms.com",
      phone: "+91 96330 88991",
      department: "Engineering",
      designation: "UI/UX Developer",
      location: "Kochi",
      joiningDate: "22 Feb 2025",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 8,
      employeeId: "EMP008",
      name: "Nimisha George",
      email: "nimisha.george@aihrms.com",
      phone: "+91 96560 11223",
      department: "Human Resources",
      designation: "HR Executive",
      location: "Trivandrum",
      joiningDate: "10 Apr 2025",
      status: "Active",
      image:
        "https://i.pravatar.cc/150?img=48",
    },
  ];

  const departments = [
    "All Departments",
    ...new Set(employees.map((employee) => employee.department)),
  ];

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(search.toLowerCase()) ||
        employee.employeeId.toLowerCase().includes(search.toLowerCase()) ||
        employee.email.toLowerCase().includes(search.toLowerCase()) ||
        employee.designation.toLowerCase().includes(search.toLowerCase());

      const matchesDepartment =
        department === "All Departments" ||
        employee.department === department;

      const matchesStatus =
        status === "All Status" || employee.status === status;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }, [search, department, status]);

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <span>HRMS</span>
            <span>/</span>
            <span className="text-slate-600">Employees</span>
          </div>

          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            Employees
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage your organization's employee information and workforce.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
            <Download size={17} />
            Export
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-200 transition hover:bg-indigo-700">
            <Plus size={18} />
            Add Employee
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Total Employees
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {employees.length}
              </h2>

              <p className="mt-2 text-xs font-medium text-emerald-600">
                Workforce overview
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Users size={21} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Active Employees
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {activeEmployees}
              </h2>

              <p className="mt-2 text-xs font-medium text-emerald-600">
                Currently working
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <UserCheck size={21} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                Inactive
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                {inactiveEmployees}
              </h2>

              <p className="mt-2 text-xs font-medium text-slate-400">
                Not currently active
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
              <UserX size={21} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-500">
                New Employees
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                4
              </h2>

              <p className="mt-2 text-xs font-medium text-indigo-600">
                Joined recently
              </p>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
              <UserPlus size={21} />
            </div>
          </div>
        </div>
      </div>

      {/* Employee Directory */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Toolbar */}
        <div className="border-b border-slate-100 p-5">

          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">

            {/* Search */}
            <div className="relative w-full xl:max-w-md">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search employee, ID, email or designation..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">

              <div className="flex items-center gap-2 text-slate-400">
                <SlidersHorizontal size={17} />
                <span className="hidden text-sm font-medium sm:block">
                  Filters
                </span>
              </div>

              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
              >
                {departments.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-medium text-slate-600 outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50"
              >
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              {/* View switch */}
              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 p-1">
                <button
                  onClick={() => setViewMode("table")}
                  className={`rounded-lg p-2 ${
                    viewMode === "table"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-400"
                  }`}
                >
                  <List size={17} />
                </button>

                <button
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg p-2 ${
                    viewMode === "grid"
                      ? "bg-white text-indigo-600 shadow-sm"
                      : "text-slate-400"
                  }`}
                >
                  <LayoutGrid size={17} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Result Count */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-800">
              {filteredEmployees.length}
            </span>{" "}
            employees
          </p>
        </div>

        {/* Grid View */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="group rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={employee.image}
                      alt={employee.name}
                      className="h-12 w-12 rounded-xl object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {employee.name}
                      </h3>

                      <p className="text-xs text-slate-400">
                        {employee.employeeId}
                      </p>
                    </div>
                  </div>

                  <button className="rounded-lg p-2 text-slate-400 opacity-0 transition group-hover:opacity-100 hover:bg-slate-100 hover:text-slate-700">
                    <MoreHorizontal size={18} />
                  </button>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <BriefcaseBusiness size={16} />
                    {employee.designation}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Users size={16} />
                    {employee.department}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} />
                    {employee.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Phone size={16} />
                    {employee.phone}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      employee.status === "Active"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {employee.status}
                  </span>

                  <button className="text-xs font-semibold text-indigo-600 hover:text-indigo-700">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Table View */
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/70">
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Employee
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Contact
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Department
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Designation
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Location
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Joining Date
                  </th>

                  <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wider text-slate-400">
                    Status
                  </th>

                  <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wider text-slate-400">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100">
                {filteredEmployees.map((employee) => (
                  <tr
                    key={employee.id}
                    className="group transition hover:bg-slate-50/70"
                  >
                    {/* Employee */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="h-11 w-11 rounded-xl object-cover"
                        />

                        <div>
                          <p className="font-semibold text-slate-800">
                            {employee.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {employee.employeeId}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Contact */}
                    <td className="px-5 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail size={13} />
                          {employee.email}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <Phone size={13} />
                          {employee.phone}
                        </div>
                      </div>
                    </td>

                    {/* Department */}
                    <td className="px-5 py-4">
                      <span className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-xs font-semibold text-slate-600">
                        {employee.department}
                      </span>
                    </td>

                    {/* Designation */}
                    <td className="px-5 py-4">
                      <p className="text-sm font-medium text-slate-700">
                        {employee.designation}
                      </p>
                    </td>

                    {/* Location */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <MapPin size={15} />
                        {employee.location}
                      </div>
                    </td>

                    {/* Joining Date */}
                    <td className="px-5 py-4">
                      <p className="text-sm text-slate-500">
                        {employee.joiningDate}
                      </p>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                          employee.status === "Active"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            employee.status === "Active"
                              ? "bg-emerald-500"
                              : "bg-slate-400"
                          }`}
                        />

                        {employee.status}
                      </span>
                    </td>

                    {/* Action */}
                    <td className="px-5 py-4 text-right">
                      <button className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
                        <MoreHorizontal size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Empty State */}
        {filteredEmployees.length === 0 && (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <Users size={25} />
            </div>

            <h3 className="mt-4 font-semibold text-slate-800">
              No employees found
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Try changing your search or filter criteria.
            </p>
          </div>
        )}

        {/* Pagination */}
        {filteredEmployees.length > 0 && (
          <div className="flex flex-col gap-3 border-t border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-400">
              Showing 1–{filteredEmployees.length} of{" "}
              {filteredEmployees.length} employees
            </p>

            <div className="flex items-center gap-2">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50">
                <ChevronLeft size={16} />
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-semibold text-white">
                1
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50">
                2
              </button>

              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Employee;