import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Login({ onSubmit }) {
  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("hrms-theme") === "dark";
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Save theme
  useEffect(() => {
    localStorage.setItem(
      "hrms-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      // Dummy login delay
      await new Promise((resolve) =>
        setTimeout(resolve, 900)
      );

      if (onSubmit) {
        await onSubmit({
          email: email.trim(),
          password,
          remember,
        });
      }

      navigate("/dashboard");
    } catch {
      setError(
        "Unable to sign in. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#080b12] text-white"
          : "bg-[#f8f9fc] text-slate-900"
      }`}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top glow */}
        <motion.div
          animate={{
            x: [0, 35, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full blur-3xl ${
            darkMode
              ? "bg-indigo-600/[0.08]"
              : "bg-indigo-300/[0.20]"
          }`}
        />

        {/* Bottom glow */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute -bottom-40 -right-40 h-[550px] w-[550px] rounded-full blur-3xl ${
            darkMode
              ? "bg-violet-600/[0.07]"
              : "bg-violet-300/[0.15]"
          }`}
        />

        {/* Subtle grid */}
        <div
          className={`absolute inset-0 opacity-[0.025] ${
            darkMode
              ? "bg-[linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(15,23,42,1)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,1)_1px,transparent_1px)]"
          } bg-[size:56px_56px]`}
        />
      </div>

      {/* =====================================================
          TOP BAR
      ===================================================== */}

      <header className="relative z-20 flex items-center justify-between px-6 py-5 sm:px-10 lg:px-14">
        {/* Logo */}
        <motion.div
          initial={{
            opacity: 0,
            x: -15,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="flex items-center gap-3"
        >
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
              darkMode
                ? "bg-white text-slate-900"
                : "bg-slate-950 text-white"
            }`}
          >
            <Users className="h-5 w-5" />
          </div>

          <div>
            <p
              className={`text-[16px] font-bold tracking-tight ${
                darkMode
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              AI HRMS
            </p>

            <p
              className={`hidden text-[8px] font-semibold uppercase tracking-[0.22em] sm:block ${
                darkMode
                  ? "text-slate-600"
                  : "text-slate-400"
              }`}
            >
              Human Resource Management
            </p>
          </div>
        </motion.div>

        {/* =================================================
            THEME TOGGLE
        ================================================= */}

        <motion.button
          whileTap={{
            scale: 0.94,
          }}
          onClick={() =>
            setDarkMode((value) => !value)
          }
          className={`group flex h-10 items-center gap-2 rounded-full border p-1 transition-all duration-300 ${
            darkMode
              ? "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
              : "border-slate-200 bg-white shadow-sm hover:bg-slate-50"
          }`}
          aria-label="Toggle theme"
        >
          <motion.div
            layout
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              darkMode
                ? "bg-indigo-500 text-white"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              {darkMode ? (
                <motion.div
                  key="moon"
                  initial={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Moon className="h-4 w-4" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{
                    opacity: 0,
                    rotate: 90,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -90,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <Sun className="h-4 w-4" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <span
            className={`hidden pr-2 text-[10px] font-semibold sm:block ${
              darkMode
                ? "text-slate-500"
                : "text-slate-500"
            }`}
          >
            {darkMode ? "Dark" : "Light"}
          </span>
        </motion.button>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="relative z-10 flex min-h-[calc(100vh-81px)] items-center justify-center px-5 pb-12 pt-4 sm:px-8">
        <div className="grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1fr_430px] xl:gap-24">

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.section
            initial={{
              opacity: 0,
              x: -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:block"
          >
            {/* Label */}
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 ${
                darkMode
                  ? "border-indigo-400/10 bg-indigo-400/[0.06]"
                  : "border-indigo-100 bg-indigo-50"
              }`}
            >
              <Sparkles
                className={`h-3.5 w-3.5 ${
                  darkMode
                    ? "text-indigo-400"
                    : "text-indigo-600"
                }`}
              />

              <span
                className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                  darkMode
                    ? "text-indigo-300"
                    : "text-indigo-600"
                }`}
              >
                Modern HR Management
              </span>
            </div>

            {/* Heading */}
            <h1
              className={`max-w-2xl text-5xl font-bold leading-[1.04] tracking-[-0.055em] xl:text-[64px] ${
                darkMode
                  ? "text-white"
                  : "text-slate-950"
              }`}
            >
              Your people.
              <br />

              <span
                className={
                  darkMode
                    ? "text-slate-500"
                    : "text-slate-400"
                }
              >
                One smarter workspace.
              </span>
            </h1>

            {/* Description */}
            <p
              className={`mt-7 max-w-xl text-[15px] leading-7 ${
                darkMode
                  ? "text-slate-500"
                  : "text-slate-500"
              }`}
            >
              Manage your workforce, HR operations and
              employee experience from one secure and
              intelligent platform.
            </p>

            {/* Features */}
            <div className="mt-9 space-y-4">
              {[
                "Centralized employee management",
                "Simplified HR operations",
                "Secure organization workspace",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.4,
                  }}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      darkMode
                        ? "bg-emerald-400/10"
                        : "bg-emerald-50"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5 text-emerald-500" />
                  </div>

                  <span
                    className={`text-sm ${
                      darkMode
                        ? "text-slate-400"
                        : "text-slate-600"
                    }`}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Security */}
            <div
              className={`mt-12 flex items-center gap-3 text-xs ${
                darkMode
                  ? "text-slate-600"
                  : "text-slate-400"
              }`}
            >
              <ShieldCheck className="h-4 w-4 text-emerald-500" />

              <span>
                Designed for modern organizations
              </span>
            </div>
          </motion.section>

          {/* =================================================
              LOGIN
          ================================================= */}

          <motion.section
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Mobile Logo */}
            <div className="mb-8 flex justify-center lg:hidden">
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                    darkMode
                      ? "bg-white text-slate-900"
                      : "bg-slate-950 text-white"
                  }`}
                >
                  <Users className="h-5 w-5" />
                </div>

                <span
                  className={`text-lg font-bold ${
                    darkMode
                      ? "text-white"
                      : "text-slate-950"
                  }`}
                >
                  AI HRMS
                </span>
              </div>
            </div>

            {/* Login Card */}
            <div
              className={`relative overflow-hidden rounded-[28px] border p-7 transition-all duration-500 sm:p-8 ${
                darkMode
                  ? "border-white/[0.08] bg-white/[0.035] shadow-2xl shadow-black/20"
                  : "border-slate-200/80 bg-white shadow-2xl shadow-slate-200/50"
              }`}
            >
              {/* Card glow */}
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-3xl ${
                  darkMode
                    ? "bg-indigo-500/[0.08]"
                    : "bg-indigo-300/[0.12]"
                }`}
              />

              <div className="relative">

                {/* Heading */}
                <h2
                  className={`text-[30px] font-bold tracking-[-0.045em] ${
                    darkMode
                      ? "text-white"
                      : "text-slate-950"
                  }`}
                >
                  Welcome back
                </h2>

                <p
                  className={`mt-2 text-sm leading-6 ${
                    darkMode
                      ? "text-slate-500"
                      : "text-slate-500"
                  }`}
                >
                  Sign in to access your HRMS workspace.
                </p>

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-xs font-medium text-red-500"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Form */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-7"
                >
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`mb-2 block text-xs font-semibold ${
                        darkMode
                          ? "text-slate-300"
                          : "text-slate-700"
                      }`}
                    >
                      Email address
                    </label>

                    <div className="group relative">
                      <Mail
                        className={`absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${
                          darkMode
                            ? "text-slate-600 group-focus-within:text-indigo-400"
                            : "text-slate-400 group-focus-within:text-indigo-600"
                        }`}
                      />

                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) =>
                          setEmail(e.target.value)
                        }
                        placeholder="name@company.com"
                        autoComplete="email"
                        className={`h-12 w-full rounded-xl border pl-11 pr-4 text-sm outline-none transition-all duration-300 focus:ring-4 focus:ring-indigo-500/10 ${
                          darkMode
                            ? "border-white/[0.08] bg-white/[0.025] text-white placeholder:text-slate-700 focus:border-indigo-400 focus:bg-white/[0.04]"
                            : "border-slate-200 bg-slate-50/60 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="mt-5">
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className={`text-xs font-semibold ${
                          darkMode
                            ? "text-slate-300"
                            : "text-slate-700"
                        }`}
                      >
                        Password
                      </label>

                      <button
                        type="button"
                        onClick={() =>
                          navigate("/forgot-password")
                        }
                        className="text-xs font-semibold text-indigo-500 transition-colors hover:text-indigo-400"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <div className="group relative">
                      <LockKeyhole
                        className={`absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 transition-colors ${
                          darkMode
                            ? "text-slate-600 group-focus-within:text-indigo-400"
                            : "text-slate-400 group-focus-within:text-indigo-600"
                        }`}
                      />

                      <input
                        id="password"
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        value={password}
                        onChange={(e) =>
                          setPassword(e.target.value)
                        }
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        className={`h-12 w-full rounded-xl border pl-11 pr-12 text-sm outline-none transition-all duration-300 focus:ring-4 focus:ring-indigo-500/10 ${
                          darkMode
                            ? "border-white/[0.08] bg-white/[0.025] text-white placeholder:text-slate-700 focus:border-indigo-400 focus:bg-white/[0.04]"
                            : "border-slate-200 bg-slate-50/60 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white"
                        }`}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          setShowPassword(
                            (value) => !value
                          )
                        }
                        className={`absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg transition-colors ${
                          darkMode
                            ? "text-slate-600 hover:bg-white/5 hover:text-slate-300"
                            : "text-slate-400 hover:bg-slate-100 hover:text-slate-600"
                        }`}
                        aria-label={
                          showPassword
                            ? "Hide password"
                            : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember */}
                  <div className="mt-5 flex items-center justify-between">
                    <label
                      className={`flex cursor-pointer items-center gap-2.5 text-xs ${
                        darkMode
                          ? "text-slate-500"
                          : "text-slate-500"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) =>
                          setRemember(e.target.checked)
                        }
                        className="h-4 w-4 cursor-pointer accent-indigo-600"
                      />

                      Keep me signed in
                    </label>

                    <div className="flex items-center gap-1.5 text-[10px]">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />

                      <span
                        className={
                          darkMode
                            ? "text-slate-600"
                            : "text-slate-400"
                        }
                      >
                        Secure
                      </span>
                    </div>
                  </div>

                  {/* Login Button */}
                  <motion.button
                    whileHover={{
                      y: -1,
                    }}
                    whileTap={{
                      scale: 0.985,
                    }}
                    disabled={loading}
                    type="submit"
                    className="group mt-7 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-600/30 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                        Signing in...
                      </>
                    ) : (
                      <>
                        Sign in

                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Security */}
                <div
                  className={`mt-6 flex items-start gap-3 rounded-xl border p-3.5 ${
                    darkMode
                      ? "border-white/[0.06] bg-white/[0.02]"
                      : "border-slate-100 bg-slate-50/70"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      darkMode
                        ? "bg-emerald-400/10"
                        : "bg-emerald-50"
                    }`}
                  >
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                  </div>

                  <div>
                    <p
                      className={`text-[10px] font-semibold ${
                        darkMode
                          ? "text-slate-300"
                          : "text-slate-700"
                      }`}
                    >
                      Secure HR workspace
                    </p>

                    <p
                      className={`mt-1 text-[9px] leading-4 ${
                        darkMode
                          ? "text-slate-600"
                          : "text-slate-400"
                      }`}
                    >
                      Your organization's information is
                      protected with secure access controls.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p
                className={`text-xs ${
                  darkMode
                    ? "text-slate-600"
                    : "text-slate-400"
                }`}
              >
                Need access?

                <button
                  type="button"
                  onClick={() =>
                    navigate("/contact")
                  }
                  className="ml-1 font-semibold text-indigo-500 hover:text-indigo-400"
                >
                  Contact your administrator
                </button>
              </p>

              <div
                className={`mt-4 flex justify-center gap-4 text-[10px] ${
                  darkMode
                    ? "text-slate-700"
                    : "text-slate-400"
                }`}
              >
                <span>Privacy</span>
                <span>•</span>
                <span>Terms</span>
                <span>•</span>
                <span>Help</span>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Copyright */}
      <div
        className={`absolute bottom-4 left-0 hidden w-full text-center text-[9px] lg:block ${
          darkMode
            ? "text-slate-700"
            : "text-slate-400"
        }`}
      >
        © 2026 AI HRMS · Human Resource Management System
      </div>
    </div>
  );
}

export default Login;