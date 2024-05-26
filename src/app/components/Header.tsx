import "./Header.css"
import { IoMdMenu } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BiAbacus } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
// import { IoRadioButtonOff } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { CgMenuGridO } from "react-icons/cg";
const Header = () => {
  return (
    <div className="div">
       
        <div className="header-component">
            <div className="iconOne"><IoMdMenu size={30} color="gray"/></div>
            <div className="logoOfGmail">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png" alt="" />
                </div>
            <button className="search">
                <IoSearchSharp size={26}color="gray"/>
                <div className="srcChild">Search in gmail</div>
                <BiAbacus size={26}  color="gray"/>
                </button>
            <div className="iconTwo">
            <FaCircle size={13} color="green" />
            Active
            <MdKeyboardArrowDown />
            </div>
            <div className="iconThree"><FaRegCircleQuestion size={23} color="gray"/></div>
            <div className="iconFour"> <CiSettings  size={26}/></div>
            <div className="iconeFive"><CgMenuGridO size={26} color="gray"/></div>
            <div className="img"><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYBB//EADkQAAEDAgQEBAMFBwUAAAAAAAEAAgMEEQUSITETQVFhBiIygRRxsUJSkaHBByNi0eHw8RUkM0Oi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAHhEBAQACAwEBAQEAAAAAAAAAAAECEQMhMUESIhP/2gAMAwEAAhEDEQA/AGl1lwON1x/ZIBcr1A7H6gx0uVt99bc+iwtSwlzidZDuey1viCaxLN8utgdzsFkK97oW8O/ndq4jkEYhmHynO4gehvPqmW1uE62Z1j6QLmyVunsqonMdlINyBfWyJQVvBLbtAa0XDB1/UoaCG6D1HYnkEZwPBZK57JZGFzXG0UZ+0BzPZC3Rscblel/B4KjGJsjI/If/ACFtsM8LU8DG6DP1sieB4THQQBjWgvcbvfbf+iORsXNlna7MeOYwMhoI4I8sbbdVUrsMhqYiyaNrge2oWhdHoq8sWiTtWZR5H4o8NcEvlhGZnYarLUEj6DEYnPuMj23+V17diVIJBZwFvkvLvFuDmmmdLGLNvfZW4+T5XNzcUn9Ru4ZGzRh7dQdQVI0rPeDq11VhLGvPniJade60Cew+N3Nn6JBNBTmlBjrJLoISWFXSO2iV1HUPyQPcDYhpsgDLYxOH1D5XCwadBf1HkFlZ3mRzpHbk62+aO4jI6plEUfUuIH1/OyB1kga7Iw6M3d35lNjO3NnUD/L5RvfU91wuDW2b7lNDvLYXu7a/TqlE3iSBrdW30Kon9EMFoHV1W0FpLA4XA3J5NXq+A4Y2laXOa3iOAFhs0dB2Wf8ACdAKWnbK9ozu202B/UrcUjQGAhc3Jluu7iwmM2vRC26ssVZjgArEZ0voG9SkhsqkAuo5WiyeHXNhrbcpsh0RLA2rZcG/JZfxDRR1dHI0gZ7GxRnxDjUOHMLAwyTHYdFkH02P404yF5hptyfT+HMo44/Wyz60G+CAYxWRkWs4LWh2izWFU5wzGJ6d7i4SMDs1tytCCqlxmolFiujdRA2TrrClSUeZJZkYKp4q5woZMnq0t+KsgqtXm0B15oNfGVxGWOnbLIz1PuxgHMDf87rLyOzPN7gDfuUZxeTNlbHoSdgL6/4QmzW6O9DDc3+0qYuTL1HIS0EO9Tvp0Rfw9R8eZpeNALm6Dtzzzgu+0VucBockQdl30/Bbkuobhm7tpaPK1rbaBWH4y8kw0EXFkGmbkD2VB0ZIykkN52TajHKHB4wHEF1vKxoFz/fVc8m3XvpYMPiWoJcy+2wcAE1mG4++QGpe+33TJcBDWeN8Re/JS0/CDmEszNPmA9j+dgtC2rxeMQTVsUrI5Gg3zNcNR2AIVNWROXHK62L4UyeBrWyyEnTndF5h+6JOg5KifI2N5LbObcW5p8lVxYuGXAFuo7hStWmLO49WUGHuNXWRiWQ6htrnQdEGqsXxjGI5f9JLGRRMuC1wIcO2i01XhdNiXneDn0v2+R5KucJdGZRG6RjZNH2OpAGguqT8/Us8cremJw+pramm+Kq4rOjeCHnd1tFpA7mFytwxlJQPij2sSoKZ+anjP8I+iMsptWdVYzJyiungosddJMuksJgVPGpODhs0n3RdWgVFWRfEUskJ2e0hAt8YeqnEeHwTNYM8rDrz/wAf0UeGYXHUxn4l5a52rOhKlNOY6uOikb+8bcM/S3981qpaXh+HIZGxjONjbZHLLXiOGG7dsazC5aWs8wzAGwW+wRoyMv0ug0EZeG8UEutc6I1hg/d6aEJMstq8eMxrQx0UNRCWSMDgeSGVHhCglmbNFHlkYbgZrj3uiNBUjS6KxOaSpy2L3GWdgMPh8tqOLnAvo5uU2Ptsjoo3yyMknc5xbtm/QK3G5Txszak3Tfu2F/EinWDML66IdC8CXUdkUxIsghzPPysg9O4vlJdbKPZKpj4uEmnqAGi8blNLdwtbddqBAaTPnAc3cqWBwlp2E6Et17oUPoJWxk5rjQhAKdmWJrTy0WqxBoa111lonXbfufqn4y8iUJyZdK6qmekm5klgQAroKizJwOiwKWL4Yyvia5h4c8ZzRvHIorhXEmwc01cAyVpsTyJPP3UIKlhkEcgc4EtIs4Dmlzm4bG6qo+jqWDMGtfECQS07KSikaw/I2N1ce+Isyh3ke3U3sLocKWVjhKDdjnEfhopQ+U+iEUuWXQ7ovTVOwJQK1iCCrdPJqhT41p4JrgbK/G67UCo5L2ReB1m6lAcjMRp/i4CzPlf9kkaIJPg9bOxrfjODYWIjA19zqjtRKxrdXWQWfGo2PeInMJA1c51hdGNhLl1ElPhT4or1MvEDRYXG/cq7DO0+UEDos5U4vPU5mMJcftZBYHtdQ0PxD6yNjnkAu1YBqjqnvFqbaPERmp3OWSi0bbuVqsRkDKNzQLLJs5/NPxufNLdcuuJKhTrpJt0lgVWFSqoxyna5YqUHRK6bdcKwnk3GZx25q3gkrKuiq2gX4MnEHe+h+iCYtUinonEOsTol+zqrD6mSI3tIHC35/wA1Oz63610PVDWt9PpOoTqexO6hme1j308hsM3lJ5dkyKQxvs7Yc0h5dD0AtsiUZzA6+6BU1SHDQonTTAj1IaPtUxXC5KmXiGoltb0A+UoZHQtppCfh799lpg+/NTRZT0R3pXHk/MBIxJxs1HCW3aQNCbX7lWqPD3QOdJKc0jt+yNtLBH6GqtKQATyW3aGXJcpoCxua0YivqdwgEeyvYlPxap5BuBoqMfp9z9VbGOY+6Y5ycUwC6IO3SXcqSzBzXBStcqcb1O06IlW2m6foqzHFPnk4cJeUtujRmvFVYXPELTozdEP2YQPnqK97N44w5h6OBuPosti83Fndc65rkr0r9nWFSYXgzqmoaWTVTs+U7tYNrjvut5x9pd3kSYo0TSmRg8kgzWQ68rNC4lo5FaRtO11RLGbWvmaexTp8JGXQXUZXRYzsdQ9m1wrsGJvbuUqqgdHyIVJ8Ntxqn1su6Ow4u02D0QgxKH72ixj4zY20VOVsoc2z3AX6rfiB/pY9EkxemYy2fVC63GnzNyRXA6oHHo0DoOakBummEhv1aTjuU1vpC682F1y1mgdExXbroCaE8osSSbdJAANrgp2PuqLHKxGdkSrsXmICrY1NwoTG3pqPmrVIC97Q1rnHkALlXW4dX08xqxh7Kh4N2se/b26qeR54F+FvCYMrcSxeM3veKndptsXfyW3L822wQvC/EFPXVJoqyJ1HWA2EchsCexRt9PkB0U87lfT8cxiAAgtlA1Ybnu3mEZgs9gIIKGxWb5VbpX8MmPYDVny6JYapKmiZMNtUDrMJcHXaBZaPON1DK4O3ATyk0ybsLffZUq2h4JaStdIWjkFnsYkBkaCQE8oWBq6DZI2StoqA4517DunB1xcqMbldusyRdumByWZZjl1RlySwM6wolhlFNXzcOAfN3Jo6puA4NPi0p4d2QM/5JSNuw7rfUdLBRQCCnYGtHTd3cpcstBjNoMOw6HD4rRkukI1k6q83XouEhIG2yj72rOlPGsBpsXp7PAZUMF45gNWn+SqeH8UmEzsHxc5a2IWY4/8AaPn1RtkwGjkI8U4WMRpfiae7auDzMLdyBqj80HnYi9ha9PIzM0NiNQe6D+HMcGJxfD1Nm1sYsW7Zx94d0aYLaFDWjbPZOJI83O9iO6hlksutGWaRv3vMPooqkWstGV6ifK0koLUQfEuLZAdRoUXdHnIA91WkbaRx6aJ4ShFNE+YyRHSaI2c3r3XZI5Ix5mEKTFmvpJosQpwTw9JGj7TUXgkhrIGSssWPbcJt0GfXEcnwyN93N0PZDKiikh19QRmUrK91xI3CaSUwOkpJhSWZt6ajhoaOKnpm5Y2tBt1JFySmlJJc9Pj46E5JJaGrjmDdMc5zGEtcQuJIsyPiuBtDLDiNITFUFwN26C61FFVSz09PK8jNIwF1gkkm+BPV0uvPEf4XD6JtaAI780kko1HSNBNyFSnaBI+3VJJGgruaHAh2oO4KH4N/t6yqpIyeCwhzQeV90kkcS1oR6fZQSgFpBSSS0YB4jG2N2ZosqgSSVcPCZGndJJJOD//Z" alt="" /></div>
        </div>
    </div>
    
      
    
  )
}

export default Header