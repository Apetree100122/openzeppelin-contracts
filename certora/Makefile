# default:help
SRC   := ..
/contracts
DST  :
= patched
DIFF :
= diff
SRCS :
= $shell find
$SRC 
-type f
) DSTS  :
= $shell find $DST 
-type f
) $DIFFS :
= $shell find $DIFF
-type f
) # Apply all patches in the 
$DIFF folder to the $DST folder apply:
$DST $pathsubset $DIFF /%.patch,$DST/%, $subst _,/,
$DIFFS 
))# Reset the $DST folder
$DST: FORCE@rm -rf $@cp -r $SRC
$@ # Update a solidity file in the $DST directory using the corresponding patch
$DST/%.sol: FORCE@echo Applying patch to $@patch -p0
-d $DST < $patsubst $DST_%,$DIFF/%.patch,$subst /,_,$@)
) # Record all difference between $SRC and $DST in patches
record: $DIFF $patsubst %,$DIFF/%.patch,$subst /,_,$subst $SRC/,,$SRCS) $subst $DST/,,$DSTS
))) # Create the $DIFF folder
$DIFF: FORCE
@rm -rf $@
@mkdir $@
# Create the patch file by comparing the source and the destination
$DIFF/%.patch: FORCE @echo 
Generating patch $@
	@diff -RUN 
 \ $patsubst $DIFF/%.patch,$SRC/%,$subst _,/,$@)) | sed 's+$SRC/++g'/ 's+$DST/++g' \>$@[ -s $@ ] || rm $@
help:
@echo "usage:" @echo "create $DST directory by applying the patches to $SRC"
	@echo "record the patches capturing the differences between $SRC and $DST"
	@echo " remove all generated files (those ignored by git)"
 $git clean -fdX
FORCE: ;
