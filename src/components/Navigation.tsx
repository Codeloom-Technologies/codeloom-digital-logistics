import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { 
      name: "Home", 
      path: "/",
    },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Software Development", path: "/services#software" },
        { name: "Cloud & DevOps", path: "/services#cloud" },
        { name: "AI & Machine Learning", path: "/services#ai" },
        { name: "Mobile Development", path: "/services#mobile" },
        { name: "Data Engineering", path: "/services#data" },
        { name: "Security Engineering", path: "/services#security" },
      ]
    },
    { 
      name: "Products", 
      path: "/products",
      dropdown: [
        { name: "CuraCloud HMS", path: "/products/curacloud", badge: "Healthcare" },
        { name: "LoomDash Logistics", path: "/products/loomdash", badge: "Logistics" },
      ]
    },
    { 
      name: "Portfolio", 
      path: "/projects",
      dropdown: [
        { name: "Case Studies", path: "/projects" },
        { name: "Our Process", path: "/projects#process" },
        { name: "Technical Capabilities", path: "/capabilities" },
      ]
    },
    { 
      name: "About", 
      path: "/about",
      dropdown: [
        { name: "Our Story", path: "/about#story" },
        { name: "Our Team", path: "/about#team" },
        { name: "Our Values", path: "/about#values" },
        { name: "Careers", path: "/about#careers" },
      ]
    },
    { 
      name: "Contact", 
      path: "/contact",
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled 
          ? "bg-black/95 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/95 to-transparent border-b border-transparent"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group z-50"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500",
                  isScrolled 
                    ? "bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/25"
                    : "bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/20"
                )}>
                  <Code className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100 group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                  Codeloom
                </span>
                <span className="text-xs text-gray-400 -mt-1 group-hover:text-blue-300 transition-colors">
                  Technologies
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                
                return (
                  <div key={item.name} className="relative group">
                    {hasDropdown ? (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className={cn(
                          "flex items-center space-x-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                          isActive(item.path) || activeDropdown === item.name
                            ? "text-white bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                        )}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={cn(
                          "w-4 h-4 transition-transform duration-300",
                          activeDropdown === item.name && "rotate-180"
                        )} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center space-x-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                          isActive(item.path)
                            ? "text-white bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                        )}
                      >
                        <span>{item.name}</span>
                      </Link>
                    )}

                    {/* Dropdown Menu */}
                    {hasDropdown && (
                      <div className={cn(
                        "absolute top-full left-0 mt-2 w-64 rounded-2xl bg-gray-900/95 backdrop-blur-xl border border-gray-800 shadow-2xl shadow-black/50",
                        "transition-all duration-300 origin-top",
                        activeDropdown === item.name 
                          ? "opacity-100 scale-100 translate-y-0" 
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      )}>
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.path}
                              className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group/item"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div>
                                <span className="text-sm text-gray-200 group-hover/item:text-white transition-colors">
                                  {dropdownItem.name}
                                </span>
                              </div>
                              {dropdownItem.badge && (
                                <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300">
                                  {dropdownItem.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white hover:bg-blue-500/10 backdrop-blur-sm"
                >
                  Get In Touch
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <span className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Start Project
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Link to="/contact" className="sm:hidden">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                >
                  Contact
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "relative w-10 h-10 rounded-xl transition-all duration-300",
                  isOpen 
                    ? "bg-gradient-to-r from-blue-500/10 to-cyan-500/10" 
                    : "hover:bg-gray-800/30"
                )}
              >
                {isOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-300 hover:text-white transition-colors" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "lg:hidden fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-l border-gray-800/50 shadow-2xl shadow-black/50",
          "transform transition-all duration-500 ease-out z-40",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="h-full overflow-y-auto">
            {/* Mobile Header */}
            <div className="p-6 border-b border-gray-800/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-white">Codeloom</span>
                    <span className="text-xs text-gray-400">Technologies</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-xl hover:bg-gray-800/50"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </Button>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-6 space-y-2">
              {navItems.map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                
                return (
                  <div key={item.name} className="space-y-1">
                    {hasDropdown ? (
                      <>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className={cn(
                            "flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                            activeDropdown === item.name || isActive(item.path)
                              ? "text-white bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                              : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            activeDropdown === item.name && "rotate-180"
                          )} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="ml-4 space-y-1 pl-4 border-l border-gray-800/50">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="flex items-center justify-between px-4 py-2 rounded-lg text-sm hover:bg-gray-800/50 transition-colors"
                                onClick={() => setIsOpen(false)}
                              >
                                <span className="text-gray-300 hover:text-white">
                                  {dropdownItem.name}
                                </span>
                                {dropdownItem.badge && (
                                  <span className="px-2 py-1 text-xs rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300">
                                    {dropdownItem.badge}
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                          isActive(item.path)
                            ? "text-white bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
                            : "text-gray-300 hover:text-white hover:bg-gray-800/30"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="p-6 border-t border-gray-800/50">
              <div className="space-y-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Start Your Project
                  </Button>
                </Link>
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Response within 2 business hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from being hidden under fixed nav */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;