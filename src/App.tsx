import { useEffect, useState } from "react";

type User = {
  _id: string;
  name: string;
  email: string;
};

const App = () => {
  const [active, setActive] = useState("Overview");
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await fetch(
          "https://hayu-dpc0hxegagefg4gh.centralus-01.azurewebsites.net/users"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await res.json();

        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, []);

  const stats = [
    { label: "Total Revenue", value: "$84,240", change: "+12.5%" },
    { label: "Active Users", value: "12,840", change: "+8.2%" },
    { label: "Orders", value: "3,642", change: "+14.8%" },
    { label: "Conversion Rate", value: "8.64%", change: "+2.4%" },
  ];

  const activities = [
    {
      name: "John Anderson",
      action: "placed a new order",
      amount: "$249.00",
      time: "2 min ago",
    },
    {
      name: "Sarah Wilson",
      action: "completed payment",
      amount: "$489.00",
      time: "18 min ago",
    },
    {
      name: "Michael Brown",
      action: "created an account",
      amount: "",
      time: "32 min ago",
    },
    {
      name: "Emily Davis",
      action: "placed a new order",
      amount: "$129.00",
      time: "1 hour ago",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        color: "#172033",
      }}
    >
      {/* Header */}
      <header
        style={{
          height: 70,
          background: "#ffffff",
          borderBottom: "1px solid #e7eaf0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 36px",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 38,
              height: 38,
              borderRadius: 11,
              background: "linear-gradient(135deg, #635bff, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: 17,
            }}
          >
            A
          </div>

          <div>
            <div style={{ fontWeight: 750, fontSize: 17 }}>Apex</div>
            <div style={{ fontSize: 11, color: "#8a93a6" }}>
              Business Platform
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <button
            style={{
              border: "none",
              background: "transparent",
              fontSize: 20,
              cursor: "pointer",
            }}
          >
            🔔
          </button>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "#e9e7ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5b4ee8",
                fontWeight: 700,
              }}
            >
              KK
            </div>

            <div>
              <div style={{ fontSize: 13, fontWeight: 700 }}>
                Hayansh Krishna
              </div>
              <div style={{ fontSize: 11, color: "#8a93a6" }}>
                Administrator
              </div>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: "flex" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: 230,
            minHeight: "calc(100vh - 70px)",
            background: "#ffffff",
            borderRight: "1px solid #e7eaf0",
            padding: "28px 16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#9aa2b1",
              fontWeight: 700,
              letterSpacing: 1,
              padding: "0 14px 12px",
            }}
          >
            MAIN MENU
          </div>

          {["Overview", "Analytics", "Customers", "Orders", "Products"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: 9,
                  padding: "12px 14px",
                  marginBottom: 5,
                  textAlign: "left",
                  cursor: "pointer",
                  background:
                    active === item ? "#eeecff" : "transparent",
                  color: active === item ? "#5b4ee8" : "#657083",
                  fontWeight: active === item ? 700 : 500,
                  fontSize: 14,
                }}
              >
                {item}
              </button>
            )
          )}

          <div
            style={{
              fontSize: 11,
              color: "#9aa2b1",
              fontWeight: 700,
              letterSpacing: 1,
              padding: "28px 14px 12px",
            }}
          >
            MANAGEMENT
          </div>

          {["Reports", "Settings"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              style={{
                width: "100%",
                border: "none",
                borderRadius: 9,
                padding: "12px 14px",
                marginBottom: 5,
                textAlign: "left",
                cursor: "pointer",
                background: active === item ? "#eeecff" : "transparent",
                color: active === item ? "#5b4ee8" : "#657083",
                fontWeight: active === item ? 700 : 500,
                fontSize: 14,
              }}
            >
              {item}
            </button>
          ))}

          <div
            style={{
              marginTop: 45,
              padding: 16,
              borderRadius: 13,
              background: "#f5f3ff",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700 }}>
              Need help?
            </div>

            <div
              style={{
                fontSize: 11,
                color: "#7c8494",
                marginTop: 6,
                lineHeight: 1.5,
              }}
            >
              Check our documentation or contact support.
            </div>

            <button
              style={{
                marginTop: 12,
                border: "none",
                background: "#635bff",
                color: "#fff",
                borderRadius: 7,
                padding: "8px 12px",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Documentation
            </button>
          </div>
        </aside>

        {/* Main */}
        <main
          style={{
            flex: 1,
            padding: "36px 40px",
            maxWidth: 1500,
            boxSizing: "border-box",
          }}
        >
          {/* Page heading */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <div>
              <div
                style={{
                  color: "#8a93a6",
                  fontSize: 13,
                  marginBottom: 6,
                }}
              >
                Dashboard / {active}
              </div>

              <h1
                style={{
                  margin: 0,
                  fontSize: 28,
                  letterSpacing: "-0.7px",
                }}
              >
                Good afternoon, Hayansh 👋
              </h1>

              <p
                style={{
                  margin: "8px 0 0",
                  color: "#7c8494",
                  fontSize: 14,
                }}
              >
                Here's what's happening with your business today.
              </p>
            </div>

            <button
              style={{
                border: "none",
                background: "#635bff",
                color: "#fff",
                borderRadius: 9,
                padding: "12px 18px",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(99,91,255,0.2)",
              }}
            >
              + Create Report
            </button>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 18,
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#fff",
                  border: "1px solid #e8ebf1",
                  borderRadius: 14,
                  padding: 22,
                  boxShadow: "0 2px 10px rgba(30,35,50,0.03)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#8a93a6",
                    fontWeight: 600,
                  }}
                >
                  {stat.label}
                </div>

                <div
                  style={{
                    marginTop: 10,
                    fontSize: 25,
                    fontWeight: 800,
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    marginTop: 8,
                    fontSize: 12,
                    color: "#16a36a",
                    fontWeight: 700,
                  }}
                >
                  ↑ {stat.change}{" "}
                  <span style={{ color: "#9aa2b1", fontWeight: 400 }}>
                    vs last month
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.7fr 1fr",
              gap: 20,
              marginTop: 22,
            }}
          >
            {/* Revenue */}
            <section
              style={{
                background: "#fff",
                border: "1px solid #e8ebf1",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2 style={{ margin: 0, fontSize: 17 }}>
                    Revenue Overview
                  </h2>

                  <p
                    style={{
                      margin: "5px 0 0",
                      color: "#8a93a6",
                      fontSize: 12,
                    }}
                  >
                    Monthly revenue performance
                  </p>
                </div>

                <select
                  style={{
                    border: "1px solid #e1e4ea",
                    padding: "8px 12px",
                    borderRadius: 7,
                    color: "#5f6878",
                    background: "#fff",
                  }}
                >
                  <option>Last 6 months</option>
                  <option>Last 12 months</option>
                </select>
              </div>

              <div
                style={{
                  height: 240,
                  marginTop: 25,
                  display: "flex",
                  alignItems: "end",
                  gap: 18,
                  padding: "0 15px",
                  borderBottom: "1px solid #edf0f4",
                }}
              >
                {[38, 52, 44, 67, 58, 82, 73, 94, 78, 88, 96, 91].map(
                  (height, index) => (
                    <div
                      key={index}
                      style={{
                        flex: 1,
                        height: `${height}%`,
                        borderRadius: "6px 6px 0 0",
                        background:
                          index === 11 ? "#635bff" : "#dcd9ff",
                        transition: "0.3s",
                      }}
                    />
                  )
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: 10,
                  color: "#9aa2b1",
                  fontSize: 10,
                }}
              >
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month) => (
                  <span key={month}>{month}</span>
                ))}
              </div>
            </section>

            {/* Quick overview */}
            <section
              style={{
                background: "#fff",
                border: "1px solid #e8ebf1",
                borderRadius: 14,
                padding: 24,
              }}
            >
              <h2 style={{ margin: 0, fontSize: 17 }}>
                Performance
              </h2>

              <p
                style={{
                  margin: "5px 0 25px",
                  color: "#8a93a6",
                  fontSize: 12,
                }}
              >
                Current business health
              </p>

              {[
                ["Customer Satisfaction", "92%"],
                ["Order Fulfillment", "87%"],
                ["Returning Customers", "74%"],
                ["Support Resolution", "96%"],
              ].map(([label, value]) => (
                <div key={label} style={{ marginBottom: 20 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 12,
                      marginBottom: 7,
                    }}
                  >
                    <span style={{ color: "#667085" }}>{label}</span>
                    <strong>{value}</strong>
                  </div>

                  <div
                    style={{
                      height: 7,
                      borderRadius: 10,
                      background: "#edf0f5",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: value,
                        borderRadius: 10,
                        background: "#635bff",
                      }}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>

          {/* Users from Azure API */}
          <section
            style={{
              background: "#fff",
              border: "1px solid #e8ebf1",
              borderRadius: 14,
              marginTop: 22,
              padding: 24,
            }}
          >
            <div style={{ marginBottom: 18 }}>
              <h2 style={{ margin: 0, fontSize: 17 }}>
                Users
              </h2>

              <p
                style={{
                  margin: "5px 0 0",
                  color: "#8a93a6",
                  fontSize: 12,
                }}
              >
                Users loaded from Azure Node.js API
              </p>
            </div>

            {users.length === 0 ? (
              <p style={{ color: "#8a93a6", fontSize: 13 }}>
                No users found.
              </p>
            ) : (
              users.map((user) => (
                <div
                  key={user._id}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid #edf0f4",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: 700 }}>
                    {user.name}
                  </div>

                  <div
                    style={{
                      fontSize: 11,
                      color: "#8a93a6",
                      marginTop: 3,
                    }}
                  >
                    {user.email}
                  </div>
                </div>
              ))
            )}
          </section>

          {/* Activity */}
          <section
            style={{
              background: "#fff",
              border: "1px solid #e8ebf1",
              borderRadius: 14,
              marginTop: 22,
              padding: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 18,
              }}
            >
              <div>
                <h2 style={{ margin: 0, fontSize: 17 }}>
                  Recent Activity
                </h2>

                <p
                  style={{
                    margin: "5px 0 0",
                    color: "#8a93a6",
                    fontSize: 12,
                  }}
                >
                  Latest customer activity
                </p>
              </div>

              <button
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#635bff",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: 12,
                }}
              >
                View all →
              </button>
            </div>

            {activities.map((activity, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "14px 0",
                  borderTop: "1px solid #edf0f4",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "#eeecff",
                      color: "#635bff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                    }}
                  >
                    {activity.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700 }}>
                      {activity.name}
                    </div>

                    <div
                      style={{
                        fontSize: 11,
                        color: "#8a93a6",
                        marginTop: 3,
                      }}
                    >
                      {activity.action}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  {activity.amount && (
                    <div style={{ fontWeight: 700, fontSize: 13 }}>
                      {activity.amount}
                    </div>
                  )}

                  <div
                    style={{
                      color: "#9aa2b1",
                      fontSize: 10,
                      marginTop: 3,
                    }}
                  >
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;