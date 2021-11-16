certoraRun certora/harnesses/GovernorBasicHarness.sol \
    --verify GovernorBasicHarness:certora/specs/GovernorCountingSimple.spec \
    --solc solc8.2 \
    --staging alex/external-timeout-for-solvers \
    --optimistic_loop \
    --settings -copyLoopUnroll=4 \
    --rule hasVotedCorrelation \
    --msg "$1"