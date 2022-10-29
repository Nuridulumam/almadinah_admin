import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
interface loaderProp {
    color: string;
    loading: any;
    fullScreen: boolean;
    className: string;
    style: any;
}

const Loader = ({ color, loading, fullScreen = false, className, style }: loaderProp) => {
    const customStyle = {
        textAlign: "center",
        ...style,
    };
    return (
        <>
            {fullScreen ? (
                <div
                    style={{
                        position: "fixed",
                        width: "100vw",
                        height: "100vh",
                        top: 0,
                        left: 0,
                        zIndex: 9999999,
                        background: "#00000000",
                    }}
                >
                    <div style={{ textAlign: "center", marginTop: "50vh" }}>
                        <SyncLoader color={color} loading={loading} />
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        zIndex: 9999999,
                        background: "#00000000",
                    }}
                >
                    <div style={customStyle} className={className}>
                        <SyncLoader color={color} loading={loading} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Loader;
