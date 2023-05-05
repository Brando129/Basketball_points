/*You are counting points for a basketball game, given the amount of 2-pointers
scored and 3-pointers scored, find the final points for the team and return that value.*/

function pointsCounter(mid_range, long_range){
    var mid_range = mid_range * 2
    var long_range = long_range * 3
    var team_total_points = mid_range + long_range
    return team_total_points
}

console.log(pointsCounter(2,3))